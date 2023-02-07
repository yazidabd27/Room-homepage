const imgHero=document.querySelectorAll('.home > img');
const shops=document.querySelectorAll('.shops .shop');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

let index=0

next.onclick=()=>{
    if(index < 2){
        index++;
        slide();
    }
}

prev.onclick=()=>{
    if(index > 0){
        index--;
        slide();
    }
}

const slide=()=>{
    imgHero.forEach(img=>{
        img.classList.add('d-none');
    })
    imgHero[index].classList.remove('d-none');

    shops.forEach(shop=>{
        shop.classList.add('d-none');
    })
    shops[index].classList.remove('d-none');
}

// navbar 

const burgerIcon=document.querySelector('.burger-icon');
const closeIcon=document.querySelector('.close-icon');
const navbar=document.querySelector('header nav');

burgerIcon.onclick=()=>{navbar.classList.add('show')};
closeIcon.onclick=()=>{navbar.classList.remove('show')};