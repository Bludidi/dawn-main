document.addEventListener("DOMContentLoaded", function() {
  const bulletPoints = document.querySelectorAll('.feature-points li');
  let currentIndex = 0;

  function cycleBulletPoints() {
    bulletPoints[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % bulletPoints.length;
    bulletPoints[currentIndex].classList.add('active');
  }

  setInterval(cycleBulletPoints, 5000); // Change 5000 to adjust the interval (in milliseconds)
});