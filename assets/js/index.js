     AOS.init();

   //  navbar and side script
 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }
   
  // service tabs
   const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Add active class to current
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });


//   video controlls 
const video = document.getElementById('customVideo');
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
  });

  video.addEventListener('pause', () => {
    playButton.style.display = 'block';
  });


  // process script
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.slider-container');
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.process-card');
    const dots = document.querySelectorAll('.nav-dot');

    let isDragging = false;
    let startPosX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentIndex = 0;
    const cardCount = cards.length;
    let isMobile = window.innerWidth < 1025;

    function updateSlider() {
        isMobile = window.innerWidth < 1025;

        if (isMobile) {
            const cardWidth = cards[0].offsetWidth + 15;
            const containerWidth = container.offsetWidth;
            const scrollWidth = cardsContainer.scrollWidth;

            const offset = (containerWidth - cardWidth) / 2;
            const maxTranslate = scrollWidth - containerWidth;
            const translateX = Math.min(Math.max(-currentIndex * cardWidth + offset, -maxTranslate), 0);

            cardsContainer.style.transform = `translateX(${translateX}px)`;

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        } else {
            // Reset when not mobile
            cardsContainer.style.transform = 'translateX(0)';
            dots.forEach(dot => dot.classList.remove('active'));
        }
    }

    function goToSlide(index) {
        if (!isMobile) return;
        currentIndex = index;
        updateSlider();
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function touchStart(event) {
        if (!isMobile) return;
        startPosX = getPositionX(event);
        isDragging = true;
        cardsContainer.classList.add('grabbing');
        animationID = requestAnimationFrame(animation);
        event.preventDefault();
    }

    function touchMove(event) {
        if (!isMobile || !isDragging) return;
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPosX;
    }

    function touchEnd() {
        if (!isMobile || !isDragging) return;

        isDragging = false;
        cardsContainer.classList.remove('grabbing');
        cancelAnimationFrame(animationID);

        const cardWidth = cards[0].offsetWidth + 15;
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -50 && currentIndex < cardCount - 1) {
            currentIndex += 1;
        }

        if (movedBy > 50 && currentIndex > 0) {
            currentIndex -= 1;
        }

        prevTranslate = -currentIndex * cardWidth + (container.offsetWidth - cardWidth) / 2;
        currentTranslate = prevTranslate;
        updateSlider();
    }

    function animation() {
        cardsContainer.style.transform = `translateX(${currentTranslate}px)`;
        animationID = requestAnimationFrame(animation);
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Touch/mouse events for dragging
    cardsContainer.addEventListener('mousedown', touchStart);
    cardsContainer.addEventListener('touchstart', touchStart, { passive: false });

    window.addEventListener('mousemove', touchMove);
    window.addEventListener('touchmove', touchMove, { passive: false });

    window.addEventListener('mouseup', touchEnd);
    window.addEventListener('touchend', touchEnd);
    window.addEventListener('mouseleave', touchEnd);

    // Handle resize
    window.addEventListener('resize', updateSlider);

    // Initial call
    updateSlider();
});



        // istallation slider

         document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.install-slider');
            const container = document.querySelector('.install-slider__container');
            const cards = document.querySelectorAll('.install-slider__card');
            const dots = document.querySelectorAll('.install-slider__dot');
            
            let isDragging = false;
            let startPosX = 0;
            let currentTranslate = 0;
            let prevTranslate = 0;
            let animationID = 0;
            let currentIndex = 0;
            const cardCount = cards.length;
            let cardWidth = cards[0].offsetWidth + 20; // card width + margin
            const cardsToShow = 4; // Number of cards to show at once

            function updateSlider() {
                const containerWidth = slider.offsetWidth;
                const scrollWidth = container.scrollWidth;
                const maxTranslate = containerWidth - scrollWidth - 20;
                
                // Calculate position to show 4 cards at once
                const snapPosition = -currentIndex * cardWidth;
                currentTranslate = Math.min(Math.max(snapPosition, maxTranslate), 0);
                
                container.style.transform = `translateX(${currentTranslate}px)`;
                
                // Update dots
                const totalSlides = Math.max(cardCount - cardsToShow + 1, 1);
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                    dot.style.display = index < totalSlides ? 'block' : 'none';
                });
            }
            
            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
            }
            
            function getPositionX(event) {
                return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            }
            
            function touchStart(event) {
                startPosX = getPositionX(event);
                isDragging = true;
                container.classList.add('grabbing');
                animationID = requestAnimationFrame(animation);
                event.preventDefault();
            }
            
            function touchMove(event) {
                if (isDragging) {
                    const currentPosition = getPositionX(event);
                    currentTranslate = prevTranslate + currentPosition - startPosX;
                }
            }
            
            function touchEnd() {
                if (isDragging) {
                    isDragging = false;
                    container.classList.remove('grabbing');
                    cancelAnimationFrame(animationID);
                    
                    const movedBy = currentTranslate - prevTranslate;
                    const threshold = cardWidth / 3;
                    
                    if (movedBy < -threshold && currentIndex < cardCount - cardsToShow) {
                        currentIndex += 1;
                    } else if (movedBy > threshold && currentIndex > 0) {
                        currentIndex -= 1;
                    }
                    
                    prevTranslate = -currentIndex * cardWidth;
                    currentTranslate = prevTranslate;
                    
                    container.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    updateSlider();
                    
                    setTimeout(() => {
                        container.style.transition = 'none';
                    }, 500);
                }
            }
            
            function animation() {
                container.style.transform = `translateX(${currentTranslate}px)`;
                animationID = requestAnimationFrame(animation);
            }
            
            // Event listeners for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(index));
            });
            
            // Touch/mouse events for dragging
            container.addEventListener('mousedown', touchStart);
            container.addEventListener('touchstart', touchStart, { passive: false });
            
            window.addEventListener('mousemove', touchMove);
            window.addEventListener('touchmove', touchMove, { passive: false });
            
            window.addEventListener('mouseup', touchEnd);
            window.addEventListener('touchend', touchEnd);
            window.addEventListener('mouseleave', touchEnd);
            
            // Handle resize
            window.addEventListener('resize', () => {
                cardWidth = cards[0].offsetWidth + 20;
                updateSlider();
            });
            
            // Initialize
            updateSlider();
        });

        // stats tabs script 
    document.addEventListener('DOMContentLoaded', function() {
            const accordionBtns = document.querySelectorAll('.accordion-btn');

            // Set first item as active by default
            const firstBtn = accordionBtns[0];
            const firstContent = firstBtn.nextElementSibling;
            firstBtn.classList.add('active');
            firstContent.classList.add('active');

            accordionBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Toggle current item
                    this.classList.toggle('active');
                    const content = this.nextElementSibling;
                    content.classList.toggle('active');

                    // Close other items if needed
                    accordionBtns.forEach(otherBtn => {
                        if (otherBtn !== this) {
                            otherBtn.classList.remove('active');
                            otherBtn.nextElementSibling.classList.remove('active');
                        }
                    });
                });
            });
        });