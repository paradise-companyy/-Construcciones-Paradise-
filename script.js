window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,.75)";
    }
});


const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", function(){
        this.style.transform="scale(0.95)";
        setTimeout(()=>{
            this.style.transform="scale(1)";
        },150);
    });
});
