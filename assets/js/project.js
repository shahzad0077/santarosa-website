//  navbar and side script
 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }




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



