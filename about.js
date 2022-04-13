let wwidth = window.innerWidth;
const footerlogo = document.querySelector('footer img');
const footertext = document.querySelectorAll('footer div p');

const page = document.querySelector('title');
const about = document.querySelector('.about');

if (page.textContent === 'Band About Page') {
  about.style.color = 'red';
}

if (wwidth >= 768) {
  footerlogo.src = './images/white_logo_img.png';
  footertext[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue tellus, eleifend vel scelerisque vel, aliquet ornare nibh. Morbi et ornare nisi, cursus sagittis tellus.';
} else {
  footerlogo.src = './images/logo_img.png';
  footertext[1].textContent = 'Some rights reserved';
}

const buttontoggle = document.querySelector('.navbar-toggler');
const closebutton = document.querySelector('.btn-close');
buttontoggle.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

closebutton.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

function changefooter() {
  wwidth = window.innerWidth;
  if (wwidth >= 768) {
    footerlogo.src = './images/white_logo_img.png';
    footertext[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue tellus, eleifend vel scelerisque vel, aliquet ornare nibh. Morbi et ornare nisi, cursus sagittis tellus.';
  } else {
    footerlogo.src = './images/logo_img.png';
    footertext[1].textContent = 'Some rights reserved';
  }
}

window.onresize = changefooter;