function toggleMenu() {
    var menu = document.getElementById("sideNav");
    // Check computed style for safety
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

// Close menu when clicking outside
window.onclick = function(event) {
    var menu = document.getElementById("sideNav");
    var icon = document.querySelector(".menu-icon");
    if (menu && event.target != menu && event.target != icon && menu.style.width === "250px") {
         if(!event.target.closest('.side-nav')) {
            menu.style.width = "0";
         }
    }
}