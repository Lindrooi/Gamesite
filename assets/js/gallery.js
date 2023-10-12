//Function to display right image and lightbox
document.querySelectorAll("#thumb").forEach((elem) => {

    elem.addEventListener('click', () => {
        const bigImg = elem.getAttribute('data-big');
        document.querySelector("#image > img").setAttribute('src', bigImg);
        document.querySelector('#image').style.display = "flex";
    });
});

function closeLightbox() {
    document.querySelector('#image').style.display = "none";
}

document.querySelector("#image").addEventListener('click', closeLightbox);

//Hamburger menu functions
const menuItems = [
    { menu: "Home", url: "../index.html" },
    { menu: "Gallery", url: "../pages/gallery.html" },
    { menu: "Rock-Paper-Scissor", url: "../pages/ssp.html" },
    { menu: "Memory-game", url: "../pages/memory.html" }
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