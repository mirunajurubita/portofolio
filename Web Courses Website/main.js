//change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//open/hide faq answer (p)
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
      faq.classList.toggle('open');  
      //change icon
      const icon = faq.querySelector('.faq__icon i');
      if(icon.className === 'fal fa-plus'){
        icon.className = "fas fa-minus"
      }else{
        icon.className = "fal fa-plus"
      }
    })
})

//show/hide nav menu on tablet
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn  = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display ="none";
})
closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display ="inline-block";
    closeBtn.style.display = "none";
})



