const userScroll = () => {
  const navbar = document.querySelector('.navbar');
  const dropdown = document.querySelector('#navbarNavDropdown');
  const toggler = document.querySelector('.navbar-toggler');

  toggler.addEventListener('click', () => {
    window.scrollY <= 50 && navbar.classList.toggle('bg-dark');
  });

  window.addEventListener('scroll', () => {
    window.scrollY > 50
      ? navbar.classList.add('bg-dark')
      : navbar.classList.remove('bg-dark');

    dropdown.classList.contains('show') && navbar.classList.add('bg-dark');
  });
};

document.addEventListener('DOMContentLoaded', userScroll);

const dateDOM = document.querySelector('#date');

const date = new Date().getFullYear();

dateDOM.textContent = date;
