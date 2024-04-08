// replace text in header
const replacedText = document.querySelector('.replace-me');

replacedText &&
  new ReplaceMe(replacedText, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });

// navigation background change when user scroll
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

document.addEventListener('DOMContentLoaded', userScroll);

// video modal
const video = document.querySelector('#video');
const videoModal = document.querySelector('#videoModal');
const videoButton = document.querySelector('.video-button');

let videoSource;

if (videoButton) {
  videoButton.addEventListener('click', () => {
    videoSource = videoButton.getAttribute('data-bs-src');
  });
}

if (videoModal) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute('src', videoSource + '?autoplay=1');
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSource);
  });
}

// date in footer
const date = document.querySelector('#date');
const year = new Date().getFullYear();

date.textContent = year;
