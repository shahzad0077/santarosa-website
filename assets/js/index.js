     
            // Initialize slider for Projects section
            document.addEventListener("DOMContentLoaded", function () {
                const sliderContainer = document.getElementById("projects-slider");
                const sliderTrack = document.getElementById("projects-track");
                let isDown = false;
                let startX;
                let scrollLeft;

                sliderContainer.addEventListener("mousedown", (e) => {
                    isDown = true;
                    startX = e.pageX - sliderContainer.offsetLeft;
                    scrollLeft = sliderContainer.scrollLeft;
                    sliderContainer.style.cursor = "grabbing";
                });

                sliderContainer.addEventListener("mouseleave", () => {
                    isDown = false;
                    sliderContainer.style.cursor = "grab";
                });

                sliderContainer.addEventListener("mouseup", () => {
                    isDown = false;
                    sliderContainer.style.cursor = "grab";
                });

                sliderContainer.addEventListener("mousemove", (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - sliderContainer.offsetLeft;
                    const walk = (x - startX) * 2;
                    sliderContainer.scrollLeft = scrollLeft - walk;
                });

                // Touch support for mobile devices
                sliderContainer.addEventListener("touchstart", (e) => {
                    isDown = true;
                    startX = e.touches[0].pageX - sliderContainer.offsetLeft;
                    scrollLeft = sliderContainer.scrollLeft;
                });

                sliderContainer.addEventListener("touchend", () => {
                    isDown = false;
                });

                sliderContainer.addEventListener("touchmove", (e) => {
                    if (!isDown) return;
                    const x = e.touches[0].pageX - sliderContainer.offsetLeft;
                    const walk = (x - startX) * 2;
                    sliderContainer.scrollLeft = scrollLeft - walk;
                });
            });
       