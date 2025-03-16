document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");


    menuToggle.addEventListener("click", function () {
        if (navMenu.classList.contains("activo")) {
            navMenu.classList.remove("activo"); 
        } else {
            navMenu.classList.add("activo"); 
        }
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("activo");
        });
    });
});
