 //  navbar and side script
 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }    
    
    
    
    
    const dropdown = document.getElementById('state-dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    const hiddenInput = dropdown.querySelector('input[type="hidden"]');
    const toggleSpan = toggle.querySelector('span');

    toggle.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });

    menu.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        toggleSpan.textContent = item.textContent;
        hiddenInput.value = item.dataset.value;
        dropdown.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });