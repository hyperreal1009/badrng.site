<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to BadRNG.site!</title>
    
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- jQuery and jQuery UI -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Custom cursor for dragging -->
    <style>
        body.dragging {
            cursor: grabbing !important;
        }
        .ui-draggable-dragging .title-bar {
            cursor: grabbing;
        }
        /* Hardware acceleration for smoother dragging */
        .ui-draggable {
            transform: translateZ(0);
            will-change: transform;
            backface-visibility: hidden;
        }
    </style>
    
    <div class="window ui-widget" id="mainWindow">
        <div class="title-bar">
            <div class="title-text">Welcome to BadRNG.site - Go full screen for the best experience.</div>
            <div class="window-controls">
                <span id="minimizeBtn"><i class="fa-solid fa-minus"></i></span>
                <span id="maximizeBtn"><i class="fa-regular fa-square"></i></span>
                <span id="closeBtn"><i class="fa-solid fa-xmark"></i></span>
            </div>
        </div>
        
        <div class="navigation">
            <div class="nav-buttons">
                <div class="nav-button" id="backBtn"><i class="fa-solid fa-arrow-left"></i></div>
                <div class="nav-button" id="forwardBtn"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="nav-dropdown"><i class="fa-solid fa-caret-down"></i></div>
            </div>
            
            <div class="address-bar">
                <div class="address-input">
                    <span>https://badrng.site</span>
                    <span><i class="fa-solid fa-caret-down"></i></span>
                </div>
                <div class="search-input">
                    <span>Search</span>
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
        </div>
        
        <div class="quick-links">
            <div class="quick-link">
                <span class="quick-link-icon"><i class="fa-solid fa-sun"></i></span>
                <span>|</span>
            </div>
            <div class="quick-link">
                <span class="quick-link-icon blue-icon"><i class="fa-solid fa-globe"></i></span>
                <span>Recently visited</span>
            </div>
            <div class="quick-link">
                <span class="quick-link-icon yellow-icon"><i class="fa-solid fa-star"></i></span>
                <span>Bookmarks</span>
            </div>
            <div class="quick-link">
                <span class="quick-link-icon green-icon"><i class="fa-solid fa-lock"></i></span>
                <span>Quick Saves</span>
            </div>
        </div>
<!--         
        <div class="tab-bar">
            <div class="tab active" data-tab="home">
                <span class="tab-icon"><i class="fa-solid fa-house"></i></span>
                <span>home</span>
            </div>
            <div class="tab" data-tab="terms">
                <span class="tab-icon"><i class="fa-solid fa-user"></i></span>
                <span>terms</span>
            </div>
            <div class="tab" data-tab="gallery">
                <span class="tab-icon"><i class="fa-solid fa-image"></i></span>
                <span>gallery</span>
            </div>
        </div> -->
        
        <!-- play mp3 autoplay-->
        <audio id="audio" src="frutiger.ogg" autoplay loop></audio>
        <div class="content">
            <div class="sidebar">
                <div class="profile-pic">
                    <div class="profile-inner">
                        <img src="morgana_avatar.png" alt="Profile" class="profile-image">
                    </div>
                </div>
                <div class="profile-title">Morgana Lawrence</div>
                <div class="profile-subtitle">Administrator</div>
                
                <div class="status-item">
                    <span class="status-icon"><i class="fa-solid fa-tree"></i></span>
                    <span>status: here</span>
                </div>
                <div class="status-item">
                    <span class="status-icon"><i class="fa-solid fa-seedling"></i></span>
                    <span>two</span>
                </div>
                <div class="status-item">
                    <span class="status-icon yellow-icon"><i class="fa-solid fa-lightbulb"></i></span>
                    <span>three</span>
                </div>
                
                <div class="social-links">
                    <div class="social-icon"><i class="fa-brands fa-instagram"></i></div>
                    <div class="social-icon"><i class="fa-brands fa-twitter"></i></div>
                    <div class="social-icon"><i class="fa-solid fa-envelope"></i></div>
                    <audio id="audio" src="frutiger-aero.mp3" autoplay></audio>
                    <div class="social-icon" id="music-icon"><i class="fa-solid fa-music"></i></div>
                </div>
            </div>
            
            <div class="main-content">
                <div id="home-content" class="tab-content active">
                    <h1 class="content-title">Welcome to BadRNG.site!</h1>
                    
                    <div class="content-image" id="bubbleContainer">
                        <!-- Bubbles will be added by JavaScript -->
                    </div>
                    
                    <p class="text-content">
                        Phasellus pellentesque quam ac bibendum euismod. Duis ultricies magna in varius accumsan. Etiam condimentum, <span class="highlight">nisl ullamcorper</span> consequat interdum, justo est ultricies nibh.
                    </p>
                    
                    <div class="columns">
                        <div class="column">
                            <h3 class="column-title">title</h3>
                            <p class="text-content">
                                Mauris eu malesuada nunc. Ut et sollicitudin ante, quis aliquet urna. Quisque elementum mi vitae felis volutpat semper. Nullam quis porta neque.
                            </p>
                        </div>
                        <div class="column">
                            <h3 class="column-title">title</h3>
                            <p class="text-content">
                                Orci elit sagittis ante, eget blandit nisl ex eu libero. Pellentesque consectetur risus ac odio pellentesque, a tincidunt felis ornare. Nullam quis.
                            </p>
                        </div>
                    </div>
                    
                    <div class="language-bar">
                        <div class="language-button english">English</div>
                        <div class="language-button spanish">Spanish</div>
                    </div>
                </div>
                
                <div id="terms-content" class="tab-content">
                    <h1 class="content-title">Terms & Conditions</h1>
                    <p class="text-content">
                        This is the terms tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor 
                        magna eu lectus convallis, in vestibulum eros pulvinar. Fusce varius sapien eget mi cursus, 
                        nec lacinia urna blandit.
                    </p>
                </div>
                
                <div id="gallery-content" class="tab-content">
                    <h1 class="content-title">Image Gallery</h1>
                    <div class="gallery-grid">
                        <div class="gallery-item"><img src="morgana_avatar.png" alt="Gallery Image 1"></div>
                        <div class="gallery-item"><img src="morgana_avatar.png" alt="Gallery Image 2"></div>
                        <div class="gallery-item"><img src="morgana_avatar.png" alt="Gallery Image 3"></div>
                        <div class="gallery-item"><img src="morgana_avatar.png" alt="Gallery Image 4"></div>
                        <div class="gallery-item"><img src="morgana_avatar.png" alt="Gallery Image 5"></div>
                        <div class="gallery-item"><img src="morgana_avatar.png" alt="Gallery Image 6"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            (made by Benjamin Eliezer M. Palacol)
            <div class="footer-icons">
                <span class="footer-icon"><i class="fa-solid fa-triangle"></i></span>
                <span class="footer-icon"><i class="fa-solid fa-cloud"></i></span>
                <span class="footer-icon"><i class="fa-solid fa-wifi"></i></span>
                <span class="footer-icon"><i class="fa-solid fa-battery-three-quarters"></i></span>
            </div>
        </div>
    </div>
    
    <!-- Custom JavaScript -->
    <script src="script.js"></script>
</body>
</html>