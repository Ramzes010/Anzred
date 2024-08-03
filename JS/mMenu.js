function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    var icon = document.getElementById("menuIcon");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        icon.classList.remove("rotated");
    } else {
        menu.style.display = "flex";
        icon.classList.add("rotated");
    }
}