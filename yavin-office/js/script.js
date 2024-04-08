// adding a translucent white background to the navbar when the page is scrolled
const userScroll = () => {
  const navbar = document.querySelector('.navbar');
  const dropdown = document.querySelector('#navbarNavDropdown');
  const toggler = document.querySelector('.navbar-toggler');

  toggler.addEventListener('click', () => {
    window.scrollY <= 50 && navbar.classList.toggle('background');
  });

  window.addEventListener('scroll', () => {
    window.scrollY > 50
      ? navbar.classList.add('background')
      : navbar.classList.remove('background');

    dropdown.classList.contains('show') && navbar.classList.add('background');
  });
};

// increasing the numbers in the stats section when the page loads
const incrementStats = () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 5);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

// updating of the date in the footer area
const date = document.querySelector('#date');
const year = new Date().getFullYear();

date.innerText = year;

// button that allows you to scroll back to the top of the page
const button = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  window.scrollY > 500
    ? button.classList.add('show')
    : button.classList.remove('show');
});

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// event listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
button.addEventListener('click', scrollToTop);
