export function loadAbout(content) {
  /* Hero Section */
  const hero = document.createElement('section');
  hero.classList.add('hero');

  const heroH1 = document.createElement('h1');
  heroH1.textContent = "About Us";
  hero.appendChild(heroH1);

  const heroP1 = document.createElement('p');
  heroP1.classList.add('tagline');
  heroP1.textContent = "A family story written in every dish";
  hero.appendChild(heroP1);

  const heroP2 = document.createElement('p');
  heroP2.classList.add('description');
  heroP2.textContent = "Founded in 2020 with a simple mission: to create a space where everyone feels at home.";
  hero.appendChild(heroP2);

  content.appendChild(hero);

  /* Info Section */
  const infoSection = document.createElement('section');
  infoSection.classList.add('info-section');

  const infoCard1 = document.createElement('div');
  infoCard1.classList.add('info-card');

  const infoCard1H3 = document.createElement('h3');
  infoCard1H3.textContent = 'Our Story';
  infoCard1.appendChild(infoCard1H3);

  const infoCard1P = document.createElement('p');
  infoCard1P.textContent = 'Started by a local family with a passion for cooking';
  infoCard1.appendChild(infoCard1P);

  infoSection.appendChild(infoCard1);

  const infoCard2 = document.createElement('div');
  infoCard2.classList.add('info-card');

  const infoCard2H3 = document.createElement('h3');
  infoCard2H3.textContent = 'Our Promise';
  infoCard2.appendChild(infoCard2H3);

  const infoCard2P = document.createElement('p');
  infoCard2P.textContent = 'Quality ingredients, made with love, served with a smile';
  infoCard2.appendChild(infoCard2P);

  infoSection.appendChild(infoCard2);

  const infoCard3 = document.createElement('div');
  infoCard3.classList.add('info-card');

  const infoCard3H3 = document.createElement('h3');
  infoCard3H3.textContent = 'Visit Us';
  infoCard3.appendChild(infoCard3H3);

  const infoCard3P = document.createElement('p');
  infoCard3P.textContent = 'Open daily 7am - 9pm. We\'d love to see you!';
  infoCard3.appendChild(infoCard3P);

  infoSection.appendChild(infoCard3);

  content.appendChild(infoSection);
}
