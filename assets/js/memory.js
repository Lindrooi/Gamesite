console.log("memory.js init");

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
document.querySelector('#btn-nav').addEventListener('click', toggleMenu);

// Memory game script
function memoryGame() {
    console.log("memoryGame init")

    const cardType = {
        circle: "../assets/images/memory/memoryCircle.png",
        triangle: "../assets/images/memory/memoryTriangle.png",
        square: "../assets/images/memory/memorySquare.png",
        cross: "../assets/images/memory/memoryCross.png",
        star: "../assets/images/memory/memoryStar.png",
        arrow: "../assets/images/memory/memoryArrow.png"
    };

    document.querySelector('#game-container').innerHTML = `
    <div id="cards" class="cards">
            <div class="row">
                <img id="card1" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.arrow}" alt="">
                <img id="card2" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.circle}" alt="">
                <img id="card3" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.star}" alt="">
                <img id="card4" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.arrow}" alt="">
            </div>
            <div class="row">
                <img id="card5" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.cross}" alt="">
                <img id="card6" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.square}" alt="">
                <img id="card7" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.triangle}" alt="">
                <img id="card8" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.triangle}" alt="">
            </div>
            <div class="row">
                <img id="card9" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.circle}" alt="">
                <img id="card10" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.star}" alt="">
                <img id="card11" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.cross}" alt="">
                <img id="card12" class="card" src="../assets/images/memory/memoryBack.png" data-flipside="${cardType.square}" alt="">
            </div>
    `;

    document.querySelectorAll('.card').forEach((elem) => {
        elem.addEventListener('click', () => {
            const flippedCard = elem.getAttribute('data-flipside');
            elem.setAttribute('src', flippedCard);
        });
    });
}
let gamesPlayed = localStorage.getItem('gamesPlayed');
document.querySelector('#start-game').addEventListener('click', () => {
    memoryGame();
    gamesPlayed++;
    localStorage.setItem('gamesPlayed', gamesPlayed)
});