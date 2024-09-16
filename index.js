const playIcon = document.getElementById('play-icon');
const video = document.getElementById('video');
const videoPoster = document.getElementById('video-poster');

playIcon.addEventListener('click', function() {
    videoPoster.style.display = 'none'; 
    video.style.display = 'block'; 
    video.play(); 
});

function animateNumbers() {
  const counters = document.querySelectorAll('.sub-span');
  const duration = 600000;

  counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = target / (duration / 100);

      const updateCounter = () => {
          const current = +counter.innerText.replace(/[^0-9]/g, ''); 
          if (current < target) {
              counter.innerText = Math.ceil(current + increment) + (counter.innerText.includes('%') ? '%' : '+');
              setTimeout(updateCounter, 100); 
          } else {
              counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
          }
      };

      updateCounter();
  });
}

window.addEventListener('DOMContentLoaded', animateNumbers);

