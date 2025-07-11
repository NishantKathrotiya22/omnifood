
btnEl = document.querySelector("#menu-btn");
navEl = document.querySelector('nav');
aEl = document.querySelectorAll('.nav-anchor');
heroEl = document.querySelector('.hero')

function MenuToggle(){
    btnEl.addEventListener('click',()=>{
    navEl.classList.toggle('nav-open');
})
}


aEl.forEach((tag)=>{
    tag.addEventListener('click',()=>{
       navEl.classList.toggle('nav-open');
    })
})

MenuToggle();


const options = {
  root:null,
  margin:"180px",
  thresold:0,
};


const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      document.body.classList.add('sticky')
      
    }

    if (entry.isIntersecting) {
      document.body.classList.remove('sticky')
    }


    console.log(entries)
  });
};


const observer = new IntersectionObserver(intersectionCallback, options);

observer.observe(heroEl)