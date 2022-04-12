const members = [
  {
    name: 'Yochai Benkler',
    position: 'Berkman Profesor of Entrepreneurial Legal Studies at Harvard Law School',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae volutpat dolor. Aliquam a felis ex. Morbi.',
    photo: './images/photo_a.png',
  },

  {
    name: 'Kilnam Cho',
    position: '',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a orci ac felis eleifend faucibus nec vel augue. Suspendisse convallis, ligula nec aliquam tristique, nisl ex tincidunt nulla, vel laoreet nibh ligula eu sapien. Pellentesque congue tempus ex.',
    photo: './images/photo_b.png',
  },

  {
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nobi and a board member of CC Korea',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum metus ac nisl auctor, vitae ultrices lacus lacinia. Vivamus in tortor at mauris pretium.',
    photo: './images/photo_c.png',
  },

  {
    name: 'Julia Leda',
    position: 'President of young pirates of Europe',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vitae maximus erat. Maecenas ultrices.',
    photo: './images/photo_d.png',
  },

  {
    name: 'Ryan Merkley',
    position: 'Ceo of Creative Commons, ex COO of the Mozilla Foundation',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus porttitor risus. Duis ex ex, eleifend in.',
    photo: './images/photo_e.png',
  },

  {
    name: 'Lila Tetrikov',
    position: 'Executive director of the Wikimedia Foundation',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lectus sed congue consequat. Donec mi erat, cursus sed neque vel, commodo mollis nulla. Nullam non nisi ac purus bibendum scelerisque. Class aptent taciti sociosqu.',
    photo: './images/photo_f.png',
  },
];

const buttontoggle = document.querySelector('.navbar-toggler');
const closebutton = document.querySelector('.btn-close');
const bandsection=document.querySelector('.band')
buttontoggle.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

closebutton.addEventListener('click', () => {
  buttontoggle.classList.toggle('active');
});

const bandmembers = document.querySelector('.band-members');
members.forEach((element) => {
  bandmembers.innerHTML += `<div class="member">
<div class="member-images">
    <img src=${element.photo} alt="member photo">
</div>
<div class="member-info">
    <h3>${element.name}</h3>
    <p class="position">${element.position}</p>
    <hr>
    <p class="resume">${element.resume}</p>
</div>
</div>`;
});

const more=document.createElement('div')
more.className="more-container"
const hiddenmembers=document.querySelectorAll('.member')
for(let i=2; i<=5; i+=1){
  hiddenmembers[i].classList.toggle("active")
}
more.innerHTML=`<p class="more-button">See More</p>`
bandsection.appendChild(more)


more.addEventListener('click', ()=>{
  for(let i=2; i<=5; i+=1){
    hiddenmembers[i].classList.toggle("active")
  }
  if(more.textContent=="See More"){
    console.l
    more.textContent="See Less"
  }else if(more.textContent=="See Less"){
    more.textContent="See More"
  }
})

