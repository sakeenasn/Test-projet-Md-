// Sélectionne les planètes
const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');
const earth = document.querySelector('.earth');

// Fonction d'orbite avec Anime.js
function orbit(planet, distance, duration) {
  anime({
    targets: planet,
    rotate: '1turn',
    duration: duration,
    easing: 'linear',
    loop: true,
    update: anim => {
      const angle = anim.progress / 100 * 2 * Math.PI;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      planet.style.transform = `translate(${x}px, ${y}px)`;
    }
  });
}

orbit(mercury, 100, 4000);
orbit(venus, 160, 8000);
orbit(earth, 230, 12000);

// Ajoute quelques étoiles aléatoires
const space = document.querySelector('.space');
for (let i = 0; i < 80; i++) {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.width = '2px';
  star.style.height = '2px';
  star.style.background = 'white';
  star.style.borderRadius = '50%';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.opacity = Math.random();
  space.appendChild(star);
}
