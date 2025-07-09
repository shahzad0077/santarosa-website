AOS.init();
//  navbar and side script
 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }


// faqs
 const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(i => {
          i.classList.remove('active');
          const icon = i.querySelector('.faq-icon');
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
        });

        // Open clicked item if it wasn't already active
        if (!isActive) {
          item.classList.add('active');
          const icon = item.querySelector('.faq-icon');
          icon.classList.remove('fa-plus');
          icon.classList.add('fa-minus');
        }
      });
    });

    // footer
     function handleDropdowns() {
      const isMobile = window.innerWidth <= 600;
      const sections = document.querySelectorAll('.footer-links');

      sections.forEach(section => {
        const title = section.querySelector('h6');
        const icon = section.querySelector('i');

        // Remove any previous click
        title.onclick = null;

        if (isMobile) {
          title.onclick = () => {
            section.classList.toggle('open');
          };
        } else {
          section.classList.remove('open');
        }
      });
    }

    window.addEventListener('load', handleDropdowns);
    window.addEventListener('resize', handleDropdowns);


    const dropdown = document.getElementById('dropdown');
const selected = dropdown.querySelector('.selected');
const options = dropdown.querySelectorAll('.option');

selected.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.textContent = option.textContent;
    dropdown.classList.remove('open');
  });
});

    // slider
    
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const track = document.querySelector('.slider-track');
  const items = document.querySelectorAll('.slider-item');

  const itemsPerSlide = 2;
  let currentIndex = 0;
  const totalItems = items.length;

  const updateSlider = () => {
    const slideWidth = items[0].offsetWidth + 20; // item width + padding
    const maxIndex = totalItems - itemsPerSlide;
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();

// test slider

