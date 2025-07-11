 //  navbar and side script
 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }
 
 
 
 
//  proccess
 const locations = [
      "Santa Rosa, CA, USA",
      "Santa Barbara, CA, USA",
      "Santa Cruz, CA, USA",
      "Santa Monica, CA, USA",
      "Santa Clara, CA, USA"
    ];

    const input = document.getElementById("locationInput");
    const suggestionsList = document.getElementById("suggestionsList");

    // Show suggestions on focus or input
    input.addEventListener("input", showSuggestions);
    input.addEventListener("focus", showSuggestions);

    function showSuggestions() {
      const value = input.value.toLowerCase();
      suggestionsList.innerHTML = "";

      const filtered = locations.filter(loc => loc.toLowerCase().includes(value));
      filtered.forEach(loc => {
        const li = document.createElement("li");
        li.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 11.0261C3.25 6.12708 7.15501 2.13281 12 2.13281C16.845 2.13281 20.75 6.12708 20.75 11.0261C20.75 13.3912 20.076 15.9307 18.8844 18.1247C17.6944 20.3159 15.9556 22.22 13.7805 23.2367C12.6506 23.7648 11.3494 23.7648 10.2195 23.2367C8.04437 22.22 6.30562 20.3159 5.11556 18.1247C3.92403 15.9307 3.25 13.3912 3.25 11.0261ZM12 3.63281C8.00843 3.63281 4.75 6.93029 4.75 11.0261C4.75 13.1232 5.35263 15.4182 6.4337 17.4088C7.51624 19.4021 9.04602 21.0324 10.8546 21.8778C11.5821 22.2178 12.4179 22.2178 13.1454 21.8778C14.954 21.0324 16.4838 19.4021 17.5663 17.4088C18.6474 15.4182 19.25 13.1232 19.25 11.0261C19.25 6.93029 15.9916 3.63281 12 3.63281ZM12 8.63281C10.7574 8.63281 9.75 9.64017 9.75 10.8828C9.75 12.1255 10.7574 13.1328 12 13.1328C13.2426 13.1328 14.25 12.1255 14.25 10.8828C14.25 9.64017 13.2426 8.63281 12 8.63281ZM8.25 10.8828C8.25 8.81174 9.92893 7.13281 12 7.13281C14.0711 7.13281 15.75 8.81174 15.75 10.8828C15.75 12.9539 14.0711 14.6328 12 14.6328C9.92893 14.6328 8.25 12.9539 8.25 10.8828Z" fill="black"/>
            </svg>
            ${loc}
            `;
        li.addEventListener("click", () => {
          input.value = loc;
          suggestionsList.innerHTML = "";
        });
        suggestionsList.appendChild(li);
      });
    }

    // Get Price button opens popup 1
    document.getElementById("getPriceBtn").addEventListener("click", () => {
      document.getElementById("popup1").style.display = "flex";
    });

    // Popup logic
    function closePopup(num) {
      document.getElementById(`popup${num}`).style.display = "none";
    }

    function nextPopup(num) {
      document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
      document.getElementById(`popup${num}`).style.display = "flex";
    }

    function prevPopup(num) {
      nextPopup(num);
    }

    // Custom dropdown logic
    function toggleDropdown() {
      document.getElementById("dropdown").classList.toggle("dropdown-open");
    }

    function selectOption(el) {
      const dropdown = document.getElementById("dropdown");
      dropdown.querySelector(".dropdown-selected").textContent = el.textContent;
      dropdown.classList.remove("dropdown-open");
    }

    // Close dropdown if clicked outside
    window.addEventListener("click", function (e) {
      if (!document.getElementById("dropdown").contains(e.target)) {
        document.getElementById("dropdown").classList.remove("dropdown-open");
      }
    });


















    