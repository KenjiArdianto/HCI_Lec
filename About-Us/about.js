// Navbar
const userclick = document.getElementById('user-click');
const arrowclick = document.getElementById('arrow-click');
const subMenu = document.getElementById('acc-menu');

let isSubMenuOpen = false;


userclick.addEventListener('click', () => {
    if (!isSubMenuOpen) {
        subMenu.style.transition = '1s';
        subMenu.style.height = '150px';
        arrowclick.style.transform = "rotate(180deg)";
    } else {
        subMenu.style.transition = '0.5s';
        subMenu.style.height = '0';
        arrowclick.style.transform = "rotate(0deg)";
    }
    isSubMenuOpen = !isSubMenuOpen;
});

arrowclick.addEventListener('click', () => {
    if (!isSubMenuOpen) {
        subMenu.style.transition = '1s';
        subMenu.style.height = '150px';
        arrowclick.style.transform = "rotate(180deg)";
    } else {
        subMenu.style.transition = '0.5s';
        subMenu.style.height = '0';
        arrowclick.style.transform = "rotate(0deg)";
    }
    isSubMenuOpen = !isSubMenuOpen;
});

// About Us
