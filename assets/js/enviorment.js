  AOS.init();
//  navbar and side script
 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }

  
  
  
  const videoFrame = document.getElementById('videoFrame');
    const indicator = document.getElementById('indicator');

    const videos = {
      fossil: "https://player.vimeo.com/video/76979871?muted=1&autoplay=1&loop=1",
      solar: "https://player.vimeo.com/video/357274789?muted=1&autoplay=1&loop=1"
    };

    const cardData = {
      fossil: [
        { img: "https://i.imgur.com/oQ5d8kW.jpg", title: "Pollution", text: "Fossil fuels pollute air and worsen climate change." },
        { img: "https://i.imgur.com/Kjz3uRn.jpg", title: "Wildfires", text: "Climate change is increasing wildfire frequency." },
        { img: "https://i.imgur.com/Guj70n8.jpg", title: "Price Hikes", text: "Fossil fuel dependence causes electric rate hikes." },
        { img: "https://i.imgur.com/dTz2D3X.jpg", title: "Rising Costs", text: "Electricity rates rose 56% since 2022." }
      ],
      solar: [
        { img: "https://i.imgur.com/YIoW9gW.jpg", title: "Clean Energy", text: "Solar energy emits zero pollutants." },
        { img: "https://i.imgur.com/02gQo7L.jpg", title: "Cost Savings", text: "Solar lowers your electricity bill over time." },
        { img: "https://i.imgur.com/YTrtbxK.jpg", title: "Job Growth", text: "The solar industry supports many green jobs." },
        { img: "https://i.imgur.com/AhY4tQd.jpg", title: "Independence", text: "Generate your own energy at home." }
      ]
    };

    function switchTab(tab, index) {
      // Update video
      videoFrame.style.opacity = 0;
      setTimeout(() => {
        videoFrame.src = videos[tab];
        videoFrame.style.opacity = 1;
      }, 300);

      // Move indicator
      indicator.style.transform = `translateX(${index * 100}%)`;

      // Toggle button active state
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-button')[index].classList.add('active');

      // Load cards
      const container = document.getElementById("cardContainer");
      container.innerHTML = "";
      cardData[tab].forEach((card, i) => {
        const delay = i * 100;
        container.innerHTML += `
          <div class="impact-card" style="animation-delay: ${delay}ms">
            <img src="${card.img}" alt="${card.title}" />
            <h3>${card.title}</h3>
            <p>${card.text}</p>
          </div>
        `;
      });
    }

    // Default tab
    switchTab('fossil', 0);