/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

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

// Rock, paper, scissors game
let userBalance = parseFloat(sessionStorage.getItem('balance'));
let localStakeSumInput = document.querySelector('#rps-stakeSum').value;
if (localStakeSumInput.includes(",")) {
    localStakeSumInput = localStakeSumInput.replace(",", ".");
}

let localStakeSum = parseFloat(localStakeSumInput);

const initalState = document.querySelector('#game-container').innerHTML;

function rpsGame() {
    console.log("rpsGame init");

    document.querySelector('#game-container').innerHTML = `
        <input type="button" class="ssp-button" id="btn-rock" class="rps-item" value="Rock"><br>
        <input type="button" class="ssp-button" id="btn-paper" class="rps-item" value="Paper"><br>
        <input type="button" class="ssp-button" id="btn-scissors" class="rps-item" value="Scissors">
    `;

    const rpsItems = [
        { item: 'rock', beats: 'scissors' },
        { item: 'paper', beats: 'rock' },
        { item: 'scissors', beats: 'paper' }
    ]

    itemRock = rpsItems[0];
    itemPaper = rpsItems[1];
    itemScissors = rpsItems[2];

    document.querySelectorAll('.rps-item').forEach((elem) => elem.addEventListener('click', () => {
        const rockElem = document.querySelector('#btn-rock');
        const paperElem = document.querySelector('#btn-paper');
        const scissorsElem = document.querySelector('#btn-scissors');
        let userPick;

        if (elem == rockElem) {
            userPick = itemRock;
        }
        else if (elem == paperElem) {
            userPick = itemPaper;
        }
        else if (elem == scissorsElem) {
            userPick = itemScissors;
        }

        let cpuPick = rpsItems[Math.floor(Math.random() * rpsItems.length)];

        if (cpuPick.beats == userPick.item) {
            console.log("CPU win");
            resultHandler("lost");
        }
        else if (userPick.beats == cpuPick.item) {
            console.log("User win");
            resultHandler("won");
        }
        
    }))
    function resultHandler(result) {
        if (result == "won") {
            userBalance += localStakeSum * 2;
            return;
        }
        document.querySelector('#game-container').innerHTML = `
            <h2>You ${result}!</h2><br>
            <input id="restart" type="button" value="Back to start">
            `;
        document.querySelector('#restart').addEventListener('click', location.reload() /*() => document.querySelector('#game-container').innerHTML = initalState*/);
    }
}

let gamesPlayed = localStorage.getItem('gamesPlayed');
document.querySelector('#start-game').addEventListener('click', () => {
    let localStakeSumInput = document.querySelector('#rps-stakeSum').value;
    if (localStakeSumInput.includes(",")) {
        localStakeSumInput = localStakeSumInput.replace(",", ".");
    }
    let localStakeSum = parseFloat(localStakeSumInput);
    console.log("Current bet: " + localStakeSum);

    if (localStakeSum <= sessionStorage.getItem('balance')) {
        let newStakeSum = (sessionStorage.getItem('balance')) - localStakeSum;
        sessionStorage.setItem('balance', newStakeSum);
        gamesPlayed++;
        sessionStorage.setItem('gamesPlayed', gamesPlayed)

        rpsGame();
    }
    else if (localStakeSum > sessionStorage.getItem('balance')) {
        alert("Insufficient funds! Bet an amount smaller than or equal to your balance.");
    }
});