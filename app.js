document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const boxes = document.querySelectorAll(".box");
    const boxWidth = boxes[0].offsetWidth;
    const visibleBoxes = 1;  // აქ წერ თავიდან რამდნი იტემი ჩანდეს 3 ზეა დეფულტდ აწყობილი, მე გადვაკეთ
    let currentIndex = 0;

    function moveSlider() {
      currentIndex = (currentIndex + 1) % boxes.length;
      // Calculate the transform value to show only the next three boxes
      const translateValue =- currentIndex * boxWidth;
      slider.style.transform = `translateX(${translateValue}px)`;
      // Update opacity to hide/show boxes
      boxes.forEach((box, index) => {
        if (index >= currentIndex && index < currentIndex + visibleBoxes) {
          box.style.opacity = 1;
        } else {
          box.style.opacity = 0;
        }
      });
    }
    // Automatically move the slider every 1 seconds (adjust as needed)
    setInterval(moveSlider,1000);
  });

 