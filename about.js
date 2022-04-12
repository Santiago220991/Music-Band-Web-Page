const buttontoggle = document.querySelector('.navbar-toggler');
const closebutton = document.querySelector('.btn-close');
buttontoggle.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

closebutton.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});