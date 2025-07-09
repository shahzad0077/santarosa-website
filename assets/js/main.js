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

  
    
  