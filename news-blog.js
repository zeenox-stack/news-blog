document.addEventListener('DOMContentLoaded', function () {
    const menuOpener = document.querySelector(".nav-two");
    const menuCloser = document.querySelector(".close-icon");
    const navMenu = document.querySelector(".nav-menu");
    
    
    if (window.innerWidth < 768) { 

        
        menuOpener.addEventListener("click", () => 
        navMenu.style.display = "block"); 


        menuCloser.addEventListener("click", () => 
        navMenu.style.display = "none");
    }
});



