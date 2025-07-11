let count = 20;
    const quantityDisplay = document.getElementById('quantity');

    function increase() {
      count++;
      quantityDisplay.textContent = count;
    }

    function decrease() {
      if (count > 0) {
        count--;
        quantityDisplay.textContent = count;
      }
    }


// panels drop-down
 const dropdown = document.getElementById('panels-dropdown');
  const dropdownOptions = document.getElementById('panels-dropdown-options');
  const selectedText = document.getElementById('selectedText');

  dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('open');
  });

  function selectOption(text, badgeText) {
    selectedText.textContent = text;
    const badge = dropdown.querySelector('.badge');

    if (badgeText) {
      badge.textContent = badgeText;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }

    dropdown.classList.remove('open');
  }

  // Optional: Close dropdown when clicked outside
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });


//   inverter dropdown
 // Inverter Dropdown
  const inverterDropdown = document.getElementById('inverter-dropdown');
  const selectedInverter = document.getElementById('selectedInverter');

  inverterDropdown.addEventListener('click', function (e) {
    if (!e.target.closest('.inverter-dropdown-options')) {
      inverterDropdown.classList.toggle('open');
    }
  });

  function selectInverter(text, badgeText) {
    selectedInverter.textContent = text;
    const badge = inverterDropdown.querySelector('.badge');
    if (badgeText) {
      badge.textContent = badgeText;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
    inverterDropdown.classList.remove('open');
  }

  // Close both if clicked outside
  document.addEventListener('click', function (e) {
    if (!panelsDropdown.contains(e.target)) {
      panelsDropdown.classList.remove('open');
    }
    if (!inverterDropdown.contains(e.target)) {
      inverterDropdown.classList.remove('open');
    }
  });


//   feilds
 function selectOption(selected) {
    const options = document.querySelectorAll(".option");
    options.forEach(opt => opt.classList.remove("selected"));
    selected.classList.add("selected");
  }





   document.querySelectorAll('.dropdown').forEach(dropdown => {
      const selected = dropdown.querySelector('.dropdown-selected');
      const list = dropdown.querySelector('.dropdown-list');
      const items = dropdown.querySelectorAll('.dropdown-item');
      const input = dropdown.querySelector('input[type="hidden"]');
      const badge = dropdown.querySelector('.badge');

      // Toggle dropdown
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllDropdowns(dropdown);
        dropdown.classList.toggle('active');
      });

      // Handle item click
      items.forEach(item => {
        item.addEventListener('click', function () {
          const value = this.getAttribute('data-value');
          const label = this.querySelector('span').textContent;

          selected.textContent = label;
          input.value = value;

          const itemBadge = this.querySelector('.badge');
          if (itemBadge) {
            badge.style.display = 'inline-block';
            badge.textContent = itemBadge.textContent;
          } else {
            badge.style.display = 'none';
          }

          dropdown.classList.remove('active');
        });
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function () {
      closeAllDropdowns();
    });

    function closeAllDropdowns(current = null) {
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== current) {
          d.classList.remove('active');
        }
      });
    }




     function initSlider(sliderTrackId, dotsId) {
      const track = document.getElementById(sliderTrackId);
      const dotsContainer = document.getElementById(dotsId);
      const slides = track.querySelectorAll('.slider-item');
      let currentSlide = 0;

      function renderDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
          const dot = document.createElement('span');
          dot.classList.add('slider-dot');
          if (i === currentSlide) dot.classList.add('active');
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
        });
      }

      function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        Array.from(dotsContainer.children).forEach(dot => dot.classList.remove('active'));
        dotsContainer.children[index].classList.add('active');
      }

      function handleResize() {
        if (window.innerWidth <= 768) {
          renderDots();
          goToSlide(currentSlide);
        } else {
          track.style.transform = 'translateX(0%)';
          dotsContainer.innerHTML = '';
        }
      }

      window.addEventListener('resize', handleResize);
      window.addEventListener('load', handleResize);
    }

    // 🟢 Initialize all 3 sliders
    initSlider('sliderTrack1', 'sliderDots1');
    initSlider('sliderTrack2', 'sliderDots2');
    initSlider('sliderTrack3', 'sliderDots3');