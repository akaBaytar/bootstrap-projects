// background of the navbar darkens when the page is scrolled
const userScroll = () => {
  const navbar = document.querySelector('.navbar');
  const toggler = document.querySelector('.navbar-toggler');
  const dropdown = document.querySelector('#navbarNavDropdown');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else if (dropdown.classList.contains('show')) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });

  toggler.addEventListener('click', () => {
    if (window.scrollY < 50) {
      navbar.classList.toggle('bg-dark');
      navbar.classList.toggle('navbar-sticky');
    }
  });
};

document.addEventListener('DOMContentLoaded', userScroll);

// footer date
const datesDOM = document.querySelectorAll('.date');

const date = new Date().getFullYear();

datesDOM.forEach((dateDOM) => (dateDOM.textContent = date));
