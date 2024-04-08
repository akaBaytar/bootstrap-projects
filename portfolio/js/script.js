const runTypingEffect = () => {
  const element = document.querySelector('#typing-text');
  const text = 'I am Burak Bilgili.';
  const delay = 150;

  typing(element, text, delay);
};

const typing = (element, text, delay) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => (element.textContent += text.charAt(i)), delay * i);
  }
};

document.addEventListener('DOMContentLoaded', runTypingEffect);

const date = new Date().getFullYear();
const element = document.querySelector('#date');

element.textContent = date;
