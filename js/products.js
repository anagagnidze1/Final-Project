const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const body = document.body;

burger.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    body.style.overflow = 'auto';
  });
});


const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

document.querySelector('main').style.paddingTop = headerHeight + 'px';

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    header.style.backgroundColor = 'var(--primary-brown)';
  } else {
    header.style.boxShadow = 'none';
    header.style.backgroundColor = 'var(--primary-brown)';
  }
});

header.style.position = 'fixed';
header.style.top = '0';
header.style.width = '100%';
header.style.zIndex = '1000';


const grid = document.getElementById('productGrid');
const seeMoreBtn = document.querySelector('.see-more-btn');

async function loadProducts() {
  try {
    const response = await fetch('./data/products.json');
    const products = await response.json();

    grid.innerHTML = '';

    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('grid-item');

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-cart">
          <span>${product.price}</span>
          <button>Add To Cart</button>
        </div>
      `;

      if (window.innerWidth <= 420 && index >= 4) {
        card.style.display = 'none';
      }

      grid.appendChild(card);
    });

    seeMoreBtn.addEventListener('click', () => {
      const allCards = document.querySelectorAll('.grid-item');
      allCards.forEach(card => card.style.display = 'flex');
      seeMoreBtn.style.display = 'none'; 
    });

  } catch (error) {
    console.error(error);
  }
}

loadProducts();
