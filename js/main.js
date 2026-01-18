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
const headerOffset = header.offsetTop; 

window.addEventListener('scroll', () => {
  if (window.scrollY > headerOffset) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.width = '100%';
    header.style.zIndex = '1000';
    header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    header.style.backgroundColor = 'white'; 
  } else {
    header.style.position = 'sticky'; 
    header.style.boxShadow = 'none';
    header.style.backgroundColor = 'transparent';
  }
});
