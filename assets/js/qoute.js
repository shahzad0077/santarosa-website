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