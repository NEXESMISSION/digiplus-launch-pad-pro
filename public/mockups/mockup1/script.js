// Global variables
let currentVideo = null;
let isPlaying = false;
let currentTime = 0;
let duration = 0;
let volume = 1;

// DOM elements
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');
const volumeSlider = document.querySelector('.volume-slider');
const volumeFill = document.querySelector('.volume-fill');
const timeDisplay = document.querySelector('.time-display');
const closeBtn = document.querySelector('.close-btn');
const workGrid = document.querySelector('.work-grid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeGridObserver();
    handleProfileImageError();
    detectVideoAspectRatios();
    initializeLazyLoading();
    initializeHoverPreviews();
    
    // Set initial active category
    const firstCategoryBtn = document.querySelector('.category-btn');
    if (firstCategoryBtn) {
        firstCategoryBtn.classList.add('active');
    }
});

// Detect video aspect ratios and apply appropriate classes
function detectVideoAspectRatios() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
        const img = item.querySelector('img');
        
        if (img) {
            // Create a new image to get the natural dimensions
            const tempImg = new Image();
            tempImg.src = img.src;
            
            tempImg.onload = function() {
                const aspectRatio = this.width / this.height;
                const videoContainer = item.querySelector('.video-container');
                
                // Remove existing format classes
                item.classList.remove('landscape', 'portrait', 'square');
                videoContainer.classList.remove('wide', 'tall');
                
                // Apply new classes based on aspect ratio
                if (aspectRatio >= 1.3) {
                    // Landscape (e.g. YouTube-style)
                    item.classList.add('landscape');
                    videoContainer.classList.add('wide');
                    item.setAttribute('data-format', 'landscape');
                    
                    // Make landscape videos span 2 columns in the grid
                    item.style.gridColumn = 'span 2';
                } else if (aspectRatio < 0.8) {
                    // Portrait (Reels, Shorts, TikTok)
                    item.classList.add('portrait');
                    videoContainer.classList.add('tall');
                    item.setAttribute('data-format', 'portrait');
                    
                    // Make portrait videos span 2 rows in the grid
                    item.style.gridRow = 'span 2';
                } else {
                    // Square or near-square
                    item.classList.add('square');
                    item.setAttribute('data-format', 'square');
                    
                    // Reset grid spans for square videos
                    item.style.gridColumn = '';
                    item.style.gridRow = '';
                }
                
                // Apply masonry-like layout
                reorganizeGridWithAnimation();
            };
            
            tempImg.onerror = function() {
                // If image fails to load, assume default aspect ratio
                const videoContainer = item.querySelector('.video-container');
                if (videoContainer.classList.contains('tall')) {
                    item.classList.add('portrait');
                    item.setAttribute('data-format', 'portrait');
                    item.style.gridRow = 'span 2';
                } else {
                    item.classList.add('landscape');
                    item.setAttribute('data-format', 'landscape');
                    item.style.gridColumn = 'span 2';
                }
            };
        }
    });
}

// Event Listeners
function initializeEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterVideos(category);
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Video items
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.dataset.video;
            if (videoSrc) {
                openVideoModal(videoSrc);
            }
        });
    });

    // Modal controls
    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', toggleMute);
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    if (progressBar) {
        progressBar.addEventListener('click', seekVideo);
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('click', adjustVolume);
    }

    // Modal background click
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Keyboard controls
    document.addEventListener('keydown', handleKeyboardControls);

    // Window resize
    window.addEventListener('resize', debounce(function() {
        reorganizeGridWithAnimation();
    }, 300));

    // Video event listeners
    if (modalVideo) {
        modalVideo.addEventListener('loadedmetadata', updateVideoInfo);
        modalVideo.addEventListener('timeupdate', updateProgress);
        modalVideo.addEventListener('ended', handleVideoEnd);
    }
}

// Video filtering with smooth animations
function filterVideos(category) {
    const videoItems = document.querySelectorAll('.video-item');
    const grid = document.querySelector('.work-grid');
    
    // Add loading state
    grid.classList.add('loading');
    
    // First, fade out all videos
    videoItems.forEach(item => {
        item.classList.add('filtering-out');
    });
    
    // After fade out animation, show/hide videos and fade in
    setTimeout(() => {
        videoItems.forEach(item => {
            const itemCategory = item.dataset.category;
            const itemFormat = item.dataset.format;
            
            // Show video if it matches the selected category or format, or if "all" is selected
            if (category === 'all' || itemCategory === category || itemFormat === category) {
                item.style.display = 'block';
                item.classList.remove('filtering-out', 'hidden');
                item.classList.add('filtering-in');
            } else {
                item.style.display = 'none';
                item.classList.add('hidden');
                item.classList.remove('filtering-out', 'filtering-in');
            }
        });
        
        // Remove loading state and reorganize grid
        grid.classList.remove('loading');
        grid.classList.add('loaded');
        
        // Reorganize grid with animation
        setTimeout(() => {
            reorganizeGridWithAnimation();
        }, 100);
        
        // Clean up animation classes
        setTimeout(() => {
            videoItems.forEach(item => {
                item.classList.remove('filtering-in', 'filtering-out');
            });
        }, 600);
        
    }, 300);
}

// Reorganize grid with staggered animations
function reorganizeGridWithAnimation() {
    const visibleItems = document.querySelectorAll('.video-item:not(.hidden)');
    const grid = document.querySelector('.work-grid');
    
    // Reset all item positions
    visibleItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px) scale(0.95)';
    });
    
    // Apply masonry-like layout
    if (grid) {
        // Use CSS Grid auto-placement algorithm for better layout
        grid.style.gridAutoFlow = 'dense';
    }
    
    // Animate items back in with staggered delay
    visibleItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.opacity = '1';
        }, index * 50);
    });
}

// Initialize Intersection Observer for scroll animations
function initializeGridObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.video-item').forEach(item => {
        observer.observe(item);
    });
}

// Profile image error handling
function handleProfileImageError() {
    const profileImage = document.querySelector('.profile-image');
    const profileFallback = document.querySelector('.profile-fallback');
    
    if (profileImage && profileFallback) {
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
            profileFallback.style.display = 'flex';
        });
    }
}

// Video Modal Functions
function openVideoModal(videoSrc) {
    if (videoModal && modalVideo) {
        modalVideo.src = videoSrc;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset video state
        currentTime = 0;
        isPlaying = false;
        updatePlayPauseButton();
    }
}

function closeVideoModal() {
    if (videoModal && modalVideo) {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = '';
        document.body.style.overflow = '';
        isPlaying = false;
        currentTime = 0;
    }
}

function togglePlayPause() {
    if (modalVideo) {
        if (isPlaying) {
            modalVideo.pause();
        } else {
            modalVideo.play();
        }
        isPlaying = !isPlaying;
        updatePlayPauseButton();
    }
}

function toggleMute() {
    if (modalVideo) {
        modalVideo.muted = !modalVideo.muted;
        updateMuteButton();
    }
}

function toggleFullscreen() {
    if (modalVideo) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            modalVideo.requestFullscreen();
        }
    }
}

function seekVideo(e) {
    if (modalVideo) {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        modalVideo.currentTime = pos * modalVideo.duration;
        updateProgress();
    }
}

function adjustVolume(e) {
    if (modalVideo) {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        modalVideo.volume = Math.max(0, Math.min(1, pos));
        modalVideo.muted = false;
        updateVolumeDisplay();
    }
}

function updateVideoInfo() {
    if (modalVideo) {
        duration = modalVideo.duration;
        updateTimeDisplay();
    }
}

function updateProgress() {
    if (modalVideo && progressFill) {
        currentTime = modalVideo.currentTime;
        const percentage = (currentTime / duration) * 100;
        progressFill.style.width = `${percentage}%`;
        updateTimeDisplay();
    }
}

function updateTimeDisplay() {
    if (timeDisplay) {
        const formattedCurrentTime = formatTime(currentTime);
        const formattedDuration = formatTime(duration);
        timeDisplay.innerHTML = `${formattedCurrentTime} / ${formattedDuration}`;
    }
}

function updatePlayPauseButton() {
    if (playPauseBtn) {
        playPauseBtn.innerHTML = isPlaying ? '⏸️' : '▶️';
    }
}

function updateMuteButton() {
    if (muteBtn && modalVideo) {
        muteBtn.innerHTML = modalVideo.muted ? '🔇' : '🔊';
    }
}

function updateVolumeDisplay() {
    if (volumeFill && modalVideo) {
        volumeFill.style.width = `${modalVideo.volume * 100}%`;
    }
}

function handleVideoEnd() {
    isPlaying = false;
    updatePlayPauseButton();
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function handleKeyboardControls(e) {
    if (!modalVideo) return;
    
    switch (e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            modalVideo.currentTime = Math.max(0, modalVideo.currentTime - 10);
            break;
        case 'ArrowRight':
            e.preventDefault();
            modalVideo.currentTime = Math.min(modalVideo.duration, modalVideo.currentTime + 10);
            break;
        case 'ArrowUp':
            e.preventDefault();
            modalVideo.volume = Math.min(1, modalVideo.volume + 0.1);
            modalVideo.muted = false;
            updateVolumeDisplay();
            break;
        case 'ArrowDown':
            e.preventDefault();
            modalVideo.volume = Math.max(0, modalVideo.volume - 0.1);
            updateVolumeDisplay();
            break;
        case 'KeyM':
            e.preventDefault();
            toggleMute();
            break;
        case 'KeyF':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 'Escape':
            closeVideoModal();
            break;
    }
}

// Utility function to debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Social media functions
function openEmail() {
    window.location.href = 'mailto:contact@nileshkharat.com';
}

function openInstagram() {
    window.open('https://www.instagram.com/x__zaynx__________x', '_blank');
}

function openDiscord() {
    window.open('https://discord.com', '_blank');
}

// Initialize lazy loading for images and videos
function initializeLazyLoading() {
    // Set up Intersection Observer for lazy loading
    const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                
                // Handle lazy images
                if (item.tagName === 'IMG' && item.classList.contains('lazy')) {
                    item.classList.add('loaded');
                    lazyLoadObserver.unobserve(item);
                }
                
                // Handle lazy videos
                if (item.classList.contains('video-preview')) {
                    const source = item.querySelector('source');
                    if (source && source.dataset.src) {
                        source.src = source.dataset.src;
                        item.load();
                        lazyLoadObserver.unobserve(item);
                    }
                }
            }
        });
    }, {
        rootMargin: '200px', // Load when within 200px of viewport
        threshold: 0
    });
    
    // Observe all lazy images
    document.querySelectorAll('img.lazy').forEach(img => {
        lazyLoadObserver.observe(img);
    });
    
    // Observe all video previews
    document.querySelectorAll('.video-preview').forEach(video => {
        lazyLoadObserver.observe(video);
    });
}

// Initialize video hover previews
function initializeHoverPreviews() {
    document.querySelectorAll('.video-item').forEach(item => {
        const videoPreview = item.querySelector('.video-preview');
        
        if (videoPreview) {
            // Play video on hover
            item.addEventListener('mouseenter', () => {
                if (videoPreview.readyState >= 3) { // HAVE_FUTURE_DATA or higher
                    videoPreview.play().catch(err => {
                        console.log('Auto-play prevented:', err);
                    });
                }
            });
            
            // Pause video when mouse leaves
            item.addEventListener('mouseleave', () => {
                videoPreview.pause();
                videoPreview.currentTime = 0;
            });
        }
    });
} 