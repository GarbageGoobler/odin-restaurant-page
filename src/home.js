export function loadHome(content) {
  content.innerHTML = ''; // clear existing
  
  /* Hero Section */
  const hero = document.createElement('section');
  hero.classList.add('hero');

  const heroH1 = document.createElement('h1');
  heroH1.textContent = "Welcome to Odin's Kitchen";
  hero.appendChild(heroH1);

  const heroP1 = document.createElement('p');
  heroP1.classList.add('tagline');
  heroP1.textContent = "Where every bite feels like home";
  hero.appendChild(heroP1);

  const heroP2 = document.createElement('p');
  heroP2.classList.add('description');
  heroP2.textContent = "Serving homemade comfort food with love since 2020. Join us for a warm, welcoming dining experience.";
  hero.appendChild(heroP2);

  const heroButton = document.createElement('button');
  heroButton.classList.add('cta-button');
  heroButton.textContent = "View Our Menu";
  hero.appendChild(heroButton);

  content.appendChild(hero);

  /* Info Section */
  const infoSection = document.createElement('section');
  infoSection.classList.add('info-section');

  const infoCard1 = document.createElement('div');
  infoCard1.classList.add('info-card');

  const infoCard1H3 = document.createElement('h3');
  infoCard1H3.textContent = 'Fresh Ingredients';
  infoCard1.appendChild(infoCard1H3);

  const infoCard1P = document.createElement('p');
  infoCard1P.textContent = 'Locally sourced, always fresh';
  infoCard1.appendChild(infoCard1P);

  infoSection.appendChild(infoCard1);

  const infoCard2 = document.createElement('div');
  infoCard2.classList.add('info-card');

  const infoCard2H3 = document.createElement('h3');
  infoCard2H3.textContent = 'Family Recipes';
  infoCard2.appendChild(infoCard2H3);

  const infoCard2P = document.createElement('p');
  infoCard2P.textContent = 'Passed down through generations';
  infoCard2.appendChild(infoCard2P);

  infoSection.appendChild(infoCard2);

  const infoCard3 = document.createElement('div');
  infoCard3.classList.add('info-card');

  const infoCard3H3 = document.createElement('h3');
  infoCard3H3.textContent = 'Cozy Atmosphere';
  infoCard3.appendChild(infoCard3H3);

  const infoCard3P = document.createElement('p');
  infoCard3P.textContent = 'Relax and enjoy your meal';
  infoCard3.appendChild(infoCard3P);

  infoSection.appendChild(infoCard3);

  content.appendChild(infoSection);
}
