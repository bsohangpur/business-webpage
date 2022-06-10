// mobile menu js

let menu = document.querySelector(".mobile-menu-line")
        let menuItem = document.querySelector(".menu-item")
        let menuOpen = false;
        menu.addEventListener('click', () => {
            if (!menuOpen) {
                menu.classList.add("mobile-menu-line-open");
                menuItem.classList.add("menu-item-open");
                menuItem.classList.remove("menu-item");
                menuOpen = true;
                
            }
            else {
                menu.classList.remove("mobile-menu-line-open");
                menuItem.classList.add("menu-item");
                menuItem.classList.remove("menu-item-open");
                menuOpen = false;
                
            }
        })


// testimonial js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});



mobileCode=()=>{
    if(mobileView.matches){
        new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay: 1500,
        
    }
})
    }
    else{
        new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,})
    }
}



const mobileView = window.matchMedia("(max-width: 768px)");

mobileCode(mobileView);



mobileView.addEventListener("change", mobileCode);