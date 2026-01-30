export function loadMenu(content) {
  /* Hero Section */
  const hero = document.createElement('section');
  hero.classList.add('hero');

  const heroH1 = document.createElement('h1');
  heroH1.textContent = "Our Menu";
  hero.appendChild(heroH1);

  const heroP1 = document.createElement('p');
  heroP1.classList.add('tagline');
  heroP1.textContent = "Homemade comfort food made with love";
  hero.appendChild(heroP1);

  const heroP2 = document.createElement('p');
  heroP2.classList.add('description');
  heroP2.textContent = "From hearty breakfasts to satisfying dinners, we have something for everyone.";
  hero.appendChild(heroP2);

  content.appendChild(hero);

  /* Menu Section */
  const menuSection = document.createElement('section');
  menuSection.classList.add('info-section');

  const menuCard1 = document.createElement('div');
  menuCard1.classList.add('info-card');

  const menuCard1H3 = document.createElement('h3');
  menuCard1H3.textContent = 'Odin\'s Breakfast Platter';
  menuCard1.appendChild(menuCard1H3);

  const menuCard1P = document.createElement('p');
  menuCard1P.textContent = 'Eggs, bacon, toast & coffee - $12';
  menuCard1.appendChild(menuCard1P);

  menuSection.appendChild(menuCard1);

  const menuCard2 = document.createElement('div');
  menuCard2.classList.add('info-card');

  const menuCard2H3 = document.createElement('h3');
  menuCard2H3.textContent = 'Grandma\'s Meatloaf';
  menuCard2.appendChild(menuCard2H3);

  const menuCard2P = document.createElement('p');
  menuCard2P.textContent = 'Classic recipe with mashed potatoes - $16';
  menuCard2.appendChild(menuCard2P);

  menuSection.appendChild(menuCard2);

  const menuCard3 = document.createElement('div');
  menuCard3.classList.add('info-card');

  const menuCard3H3 = document.createElement('h3');
  menuCard3H3.textContent = 'Garden Fresh Salad';
  menuCard3.appendChild(menuCard3H3);

  const menuCard3P = document.createElement('p');
  menuCard3P.textContent = 'Local greens with house dressing - $10';
  menuCard3.appendChild(menuCard3P);

  menuSection.appendChild(menuCard3);

  const menuCard4 = document.createElement('div');
  menuCard4.classList.add('info-card');

  const menuCard4H3 = document.createElement('h3');
  menuCard4H3.textContent = 'Fluffy Pancakes Stack';
  menuCard4.appendChild(menuCard4H3);

  const menuCard4P = document.createElement('p');
  menuCard4P.textContent = 'Maple syrup & fresh berries - $11';
  menuCard4.appendChild(menuCard4P);

  menuSection.appendChild(menuCard4);

  const menuCard5 = document.createElement('div');
  menuCard5.classList.add('info-card');

  const menuCard5H3 = document.createElement('h3');
  menuCard5H3.textContent = 'Classic Grilled Cheese';
  menuCard5.appendChild(menuCard5H3);

  const menuCard5P = document.createElement('p');
  menuCard5P.textContent = 'Cheddar & tomato soup side - $9';
  menuCard5.appendChild(menuCard5P);

  menuSection.appendChild(menuCard5);

  const menuCard6 = document.createElement('div');
  menuCard6.classList.add('info-card');

  const menuCard6H3 = document.createElement('h3');
  menuCard6H3.textContent = 'Homemade Tomato Soup';
  menuCard6.appendChild(menuCard6H3);

  const menuCard6P = document.createElement('p');
  menuCard6P.textContent = 'Creamy with grilled cheese - $8';
  menuCard6.appendChild(menuCard6P);

  menuSection.appendChild(menuCard6);

  const menuCard7 = document.createElement('div');
  menuCard7.classList.add('info-card');

  const menuCard7H3 = document.createElement('h3');
  menuCard7H3.textContent = 'Chicken Pot Pie';
  menuCard7.appendChild(menuCard7H3);

  const menuCard7P = document.createElement('p');
  menuCard7P.textContent = 'Golden crust with tender filling - $14';
  menuCard7.appendChild(menuCard7P);

  menuSection.appendChild(menuCard7);

  const menuCard8 = document.createElement('div');
  menuCard8.classList.add('info-card');

  const menuCard8H3 = document.createElement('h3');
  menuCard8H3.textContent = 'Apple Pie Slice';
  menuCard8.appendChild(menuCard8H3);

  const menuCard8P = document.createElement('p');
  menuCard8P.textContent = 'Warm with vanilla ice cream - $7';
  menuCard8.appendChild(menuCard8P);

  menuSection.appendChild(menuCard8);

  const menuCard9 = document.createElement('div');
  menuCard9.classList.add('info-card');

  const menuCard9H3 = document.createElement('h3');
  menuCard9H3.textContent = 'Fresh Lemonade';
  menuCard9.appendChild(menuCard9H3);

  const menuCard9P = document.createElement('p');
  menuCard9P.textContent = 'Squeezed daily, perfectly sweet - $4';
  menuCard9.appendChild(menuCard9P);

  menuSection.appendChild(menuCard9);

  content.appendChild(menuSection);
}
