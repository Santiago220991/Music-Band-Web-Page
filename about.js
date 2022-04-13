const buttontoggle = document.querySelector('.navbar-toggler');
const closebutton = document.querySelector('.btn-close');
buttontoggle.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

closebutton.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

const footerlogo=document.querySelector("footer img")
const footertext=document.querySelectorAll("footer div p")
window.onresize=changefooter;
console.log(footertext)
function changefooter(){
  let wwidth=window.innerWidth;
  if(wwidth>=768){
    footerlogo.src="./images/white_logo_img.png"
    footertext[1].textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque augue tellus, eleifend vel scelerisque vel, aliquet ornare nibh. Morbi et ornare nisi, cursus sagittis tellus."
    console.log("gola1")
  }else{
    footerlogo.src="./images/logo_img.png"
    footertext[1].textContent="Some rights reserved"
    console.log("gola2")
  }

}