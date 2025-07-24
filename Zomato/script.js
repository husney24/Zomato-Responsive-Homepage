// Zomato App Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const locationDropdown = document.querySelector('.location-dropdown');
    
    // Search button click handler
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleSearch();
    });
    
    // Search on Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    });
    
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        const location = locationDropdown.value;
        
        if (searchTerm) {
            // Add loading state
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
            searchBtn.disabled = true;
            
            // Simulate search (in real app, this would be an API call)
            setTimeout(() => {
                console.log(`Searching for "${searchTerm}" in ${location}`);
                showSearchResults(searchTerm, location);
                
                // Reset button
                searchBtn.innerHTML = 'Search';
                searchBtn.disabled = false;
            }, 1500);
        } else {
            showNotification('Please enter a search term', 'warning');
        }
    }
    
    function showSearchResults(term, location) {
        showNotification(`Searching for "${term}" in ${location}...`, 'info');
        // In a real app, this would filter and display restaurants
        scrollToSection('.restaurants-section');
    }

    // Popular search tags functionality
    const popularTags = document.querySelectorAll('.popular-tag');
    
    popularTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagText = this.textContent;
            searchInput.value = tagText;
            handleSearch();
        });
    });

    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#e53e3e';
                showNotification('Added to favorites!', 'success');
                
                // Add pulse animation
                this.classList.add('animate-pulse');
                setTimeout(() => {
                    this.classList.remove('animate-pulse');
                }, 1000);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '#718096';
                showNotification('Removed from favorites', 'info');
            }
        });
    });

    // Restaurant card click functionality
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    restaurantCards.forEach(card => {
        card.addEventListener('click', function() {
            const restaurantName = this.querySelector('h4').textContent;
            showRestaurantDetails(restaurantName);
        });
    });
    
    function showRestaurantDetails(name) {
        // In a real app, this would navigate to restaurant detail page
        showNotification(`Opening ${name}...`, 'info');
        console.log(`Opening restaurant details for: ${name}`);
    }

    // Collection card click functionality
    const collectionCards = document.querySelectorAll('.collection-card');
    
    collectionCards.forEach(card => {
        card.addEventListener('click', function() {
            const collectionName = this.querySelector('h4').textContent;
            showNotification(`Exploring ${collectionName}...`, 'info');
            console.log(`Opening collection: ${collectionName}`);
        });
    });

    // Service card click functionality
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            showNotification(`Redirecting to ${serviceName}...`, 'info');
            console.log(`Opening service: ${serviceName}`);
        });
    });

    // Smooth scrolling for navigation links
    function scrollToSection(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .collection-card, .restaurant-card');
    animateElements.forEach(el => observer.observe(el));

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }

    function getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // Add notification styles dynamically
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 1000;
            min-width: 300px;
            animation: slideInRight 0.3s ease-out;
            border-left: 4px solid var(--primary-color);
        }

        .notification-success {
            border-left-color: #38a169;
            background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
        }

        .notification-error {
            border-left-color: #e53e3e;
            background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
        }

        .notification-warning {
            border-left-color: #d69e2e;
            background: linear-gradient(135deg, #fffbeb 0%, #fbd38d 100%);
        }

        .notification-info {
            border-left-color: #3182ce;
            background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
        }

        .notification i:first-child {
            font-size: 1.2rem;
        }

        .notification-success i:first-child {
            color: #38a169;
        }

        .notification-error i:first-child {
            color: #e53e3e;
        }

        .notification-warning i:first-child {
            color: #d69e2e;
        }

        .notification-info i:first-child {
            color: #3182ce;
        }

        .notification span {
            flex: 1;
            font-weight: 500;
            color: #2d3748;
        }

        .notification-close {
            background: none;
            border: none;
            color: #718096;
            cursor: pointer;
            padding: 0.25rem;
            border-radius: 4px;
            transition: all 0.2s ease;
        }

        .notification-close:hover {
            background: rgba(0, 0, 0, 0.1);
            color: #2d3748;
        }

        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @media (max-width: 768px) {
            .notification {
                right: 10px;
                left: 10px;
                min-width: auto;
            }
        }
    `;

    // Add styles to head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);

    // Location change handler
    locationDropdown.addEventListener('change', function() {
        const selectedLocation = this.value;
        showNotification(`Location changed to ${selectedLocation}`, 'info');
        console.log(`Location changed to: ${selectedLocation}`);
    });

    // Add loading states for interactive elements
    function addLoadingState(element, originalText) {
        element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        element.disabled = true;
        
        setTimeout(() => {
            element.innerHTML = originalText;
            element.disabled = false;
        }, 1000);
    }

    // Search input focus effect
    searchInput.addEventListener('focus', function() {
        this.parentElement.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.parentElement.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.parentElement.style.transform = 'scale(1)';
        this.parentElement.parentElement.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });

    // Add hover effects to cards
    const allCards = document.querySelectorAll('.service-card, .collection-card, .restaurant-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // Console welcome message
    console.log('🍕 Zomato App Loaded Successfully! 🎉');
    console.log('Interactive features:');
    console.log('• Search functionality');
    console.log('• Like/favorite restaurants');
    console.log('• Location selection');
    console.log('• Smooth animations');
    console.log('• Click to explore collections and services');
});

// Export functions for potential external use
window.ZomatoApp = {
    showNotification: function(message, type) {
        // This allows external scripts to show notifications
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        document.dispatchEvent(event);
    }
};