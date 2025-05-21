const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

console.log('hamburger:', hamburger);
console.log('navMenu:', navMenu);

function checkScreenSize() {
  console.log('Checking screen size:', window.innerWidth);
  if (window.innerWidth >= 768) {
    navMenu.removeAttribute('hidden');  
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.style.display = 'none'; 
    console.log('PC view: menu visible, hamburger hidden');
  } else {
    navMenu.setAttribute('hidden', '');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.style.display = 'block'; 
    hamburger.textContent = '☰'; 
    console.log('Mobile view: menu hidden, hamburger visible');
  }
}


checkScreenSize();


window.addEventListener('resize', checkScreenSize);


hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked');
  const isHidden = navMenu.hasAttribute('hidden');
  if (isHidden) {
    navMenu.removeAttribute('hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.textContent = '✖'; 
    console.log('Menu opened');
  } else {
    navMenu.setAttribute('hidden', '');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.textContent = '☰'; 
    console.log('Menu closed');
  }
});
