//Hamburger menu function
const menuItems = [
    { menu: "Home", url: "./index.html" },
    { menu: "Gallery", url: "./pages/gallery.html" },
    { menu: "Rock-Paper-Scissor", url: "./pages/ssp.html" },
    { menu: "Memory-game", url: "./pages/memory.html" }
];

for (item of menuItems) {
    document.querySelector("#menuItem").innerHTML += `
        <a href="${item.url}">${item.menu}</a>    
    `;
}

function toggleMenu() {
    menu = document.querySelector("#menu");

    if (menu.style.display == "block") {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }

}
document.querySelector("#btn-nav").addEventListener('click', toggleMenu);