// Initialize window position 
$(window).on("load resize", function() {
    // Only reposition if not being dragged and not maximized
    if (!$("#mainWindow").hasClass("ui-draggable-dragging") && 
        !$("#mainWindow").hasClass("maximized")) {
        $("#mainWindow").css({
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        });
    }
});$(document).ready(function() {
// Make the window draggable with jQuery UI
$("#mainWindow").draggable({
    handle: ".title-bar",
    containment: "window",
    scroll: false,
    iframeFix: true,
    refreshPositions: true,
    distance: 3, // Slight threshold to prevent accidental drags
    helper: "original",
    start: function(event, ui) {
        $("body").addClass("dragging");
        // Remove transform during drag to avoid position calculation issues
        $(this).data("originalTransform", $(this).css("transform"));
        $(this).css("transform", "none");
    },
    stop: function(event, ui) {
        $("body").removeClass("dragging");
        // Only restore transform if not maximized
        if (!$(this).hasClass("maximized")) {
            // Calculate new position based on current position after drag
            const position = $(this).position();
            $(this).css({
                left: position.left,
                top: position.top,
                transform: "none" // Keep transform none for stability
            });
        }
    },
    drag: function(event, ui) {
        // If window is maximized, don't allow dragging
        if ($(this).hasClass("maximized")) {
            return false;
        }
        // Apply smoothing to the drag movement
        ui.position.left = Math.round(ui.position.left);
        ui.position.top = Math.round(ui.position.top);
    }
});

// Add slight wobble effect when dragging starts
$("#mainWindow").on("dragstart", function() {
    // Do nothing here - we'll handle this with CSS transitions
});

// Window control buttons functionality
$("#minimizeBtn").click(function() {
    $("#mainWindow").effect("scale", {
        percent: 50,
        direction: 'vertical',
        origin: ['bottom', 'middle']
    }, 300);
    
    setTimeout(function() {
        $("#mainWindow").effect("scale", {
            percent: 200,
            direction: 'vertical',
            origin: ['bottom', 'middle']
        }, 300);
    }, 500);
});

$("#maximizeBtn").click(function() {
    $("#mainWindow").toggleClass("maximized");
    
    if ($("#mainWindow").hasClass("maximized")) {
        // Save original position before maximizing
        if (!$("#mainWindow").data("originalPosition")) {
            $("#mainWindow").data("originalPosition", {
                top: $("#mainWindow").css("top"),
                left: $("#mainWindow").css("left")
            });
        }
        
        $("#mainWindow").css({
            width: "95vw",
            height: "90vh", // Allow more flexibility in the aspect ratio
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        });
        $(this).find("i").removeClass("fa-square").addClass("fa-window-restore");
    } else {
        const originalPosition = $("#mainWindow").data("originalPosition") || {
            top: "50%",
            left: "50%"
        };
        
        $("#mainWindow").css({
            width: "1280px",
            height: "800px",
            top: originalPosition.top,
            left: originalPosition.left,
            transform: "translate(-50%, -50%)"
        });
        $(this).find("i").removeClass("fa-window-restore").addClass("fa-square");
    }
});

$("#closeBtn").click(function() {
    $("#mainWindow").effect("puff", {}, 300);
    
    setTimeout(function() {
        $("#mainWindow").show();
        $("#mainWindow").effect("drop", {
            direction: "up"
        }, 500);
    }, 1000);
});

// Navigation buttons
$("#backBtn, #forwardBtn").click(function() {
    $(this).effect("highlight", {}, 300);
});

// Tab functionality
$(".tab").click(function() {
    const tabId = $(this).data("tab");
    
    // Remove active class from all tabs and tab contents
    $(".tab").removeClass("active");
    $(".tab-content").removeClass("active");
    
    // Add active class to current tab and show corresponding content
    $(this).addClass("active");
    $(`#${tabId}-content`).addClass("active");
});

// Create bubbles for the water/globe effect
function createBubbles() {
    const container = document.getElementById('bubbleContainer');
    
    // Clear any existing bubbles
    $(container).empty();
    
    // Create different sized bubbles
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size
        const size = Math.random() * 30 + 10;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        // Random position
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = Math.random() * 100 + '%';
        
        // Add glossy effect to bubbles
        bubble.style.boxShadow = 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 1px rgba(0,0,0,0.2)';
        bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.4) 60%, rgba(255,255,255,0) 70%)';
        
        container.appendChild(bubble);
    }
}

// Initial bubble creation
createBubbles();

// Recreate bubbles periodically for animation effect
setInterval(function() {
    $(".bubble").fadeOut(500, function() {
        createBubbles();
        $(".bubble").hide().fadeIn(500);
    });
}, 7000);

// Click effects for buttons
$(".nav-button, .social-icon, .language-button, .tab, .quick-link").on('mousedown', function() {
    $(this).css('transform', 'scale(0.95)');
}).on('mouseup mouseleave', function() {
    $(this).css('transform', 'scale(1)');
});

// Make language buttons and social links interactive
$(".language-button, .social-icon").click(function() {
    $(this).effect("bounce", { times: 3, distance: 10 }, 300);
});

// Make pricing buttons interactive
$(".pricing-button").click(function() {
    $(this).effect("highlight", { color: "#a8d5ff" }, 500);
    
    const plan = $(this).parent().find(".pricing-header").text();
    
    // Show a simple jQuery UI dialog
    $("<div></div>").html(`Thank you for selecting the <strong>${plan}</strong> plan! A representative will contact you soon.`).dialog({
        title: "Plan Selected",
        modal: true,
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });
});

// Add tooltips to icons
$(".social-icon").tooltip({
    items: ".social-icon",
    content: function() {
        const icon = $(this).find("i").attr("class");
        if (icon.includes("instagram")) return "Follow us on Instagram";
        if (icon.includes("twitter")) return "Follow us on Twitter";
        if (icon.includes("envelope")) return "Contact us";
        return "";
    }
});

// Make gallery items interactive
$(".gallery-item").click(function() {
    const imgSrc = $(this).find("img").attr("src");
    
    // Create lightbox dialog
    $("<div><img src='" + imgSrc + "' style='width:100%;'></div>").dialog({
        title: "Image Preview",
        modal: true,
        width: 500,
        height: 400,
        buttons: {
            Close: function() {
                $(this).dialog("close");
            }
        }
    });
});

// Add hover effect to interactive elements
$(".quick-link, .tab, .language-button").hover(
    function() {
        $(this).css({
            "background-color": "rgba(255, 255, 255, 0.3)",
            "transition": "background-color 0.3s ease"
        });
    },
    function() {
        $(this).css("background-color", "");
    }
);

// // Show a welcome message when the page loads
// setTimeout(function() {
//     $("<div></div>").html("Welcome to the Windows Style UI Demo! This window is now 1280x800 with increased transparency. You can drag it by the title bar and explore all the interactive elements.").dialog({
//         title: "Welcome",
//         modal: true,
//         width: 400,
//         buttons: {
//             "Let's Explore": function() {
//                 $(this).dialog("close");
//             }
//         }
//     });
// }, 1000);

// Add double-click to title bar to maximize/restore
$(".title-bar").dblclick(function() {
    $("#maximizeBtn").click();
});

// Smoother shake effect with jQuery UI
$.fn.smoothShake = function() {
    return this.each(function() {
        $(this).css({transition: 'none'});
        $(this).effect("shake", {
            times: 2,
            distance: 2,
            direction: "left"
        }, 150, function() {
            $(this).css({transition: ''});
        });
    });
};

// Add small shake when trying to drag window when maximized
$("#mainWindow").on("mousedown", ".title-bar", function(e) {
    if ($("#mainWindow").hasClass("maximized")) {
        $("#mainWindow").smoothShake();
    }
});
});

// Add music player functionality
$(document).ready(function() {
    // Add music player functionality
    $("#music-icon").click(function() {
        const audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});