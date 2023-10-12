

//User parameter function for stake sum
function getStakeBalance() {
    console.log("getStakeBalance()");
<<<<<<< HEAD
    
=======


>>>>>>> ebd008b10fa43a386130d9f1dc32246ab53faeff
    let stakeSumInput = document.querySelector('#stake').value;

    if (stakeSumInput.includes(",")) {
        stakeSumInput = stakeSumInput.replace(",", ".");
    }

    let stakeSum = parseFloat(stakeSumInput);
<<<<<<< HEAD
    console.log("Current user balance: " + stakeSum);
    sessionStorage.balance += stakeSum;
    
    updateBalance()
}
function updateBalance() {
    document.querySelector('#ageSum').innerHTML += `
    <p>Your balance: ${sessionStorage.balance}</p><br>
    `;
=======
    console.log(stakeSum);

    sessionStorage.setItem('balance', stakeSum);
>>>>>>> ebd008b10fa43a386130d9f1dc32246ab53faeff
}

document.querySelector('#set-balance').addEventListener('click', getStakeBalance);
if (sessionStorage.balance) {
    updateBalance();
}


//Usergeneration function

function userGeneration() {
    console.log("userGeneration()");
    const firstName = document.querySelector("#loginFirst").value;
    const lastName = document.querySelector("#loginLast").value;

    let username =  lastName.slice(0,4) + firstName.slice(0,2);


    const minAge = 18;
    const age = document.querySelector('#age').value;

    if (firstName === "" || lastName === "" || age === "") {

        document.querySelector("#loginoutput").innerText = "Please enter both first and last name.";

    } else {

        document.querySelector("#loginoutput").innerText = "Welcome " + firstName + ", other gamblers will know you as " + username;

    }

    if (age < minAge) {
        alert("Age restriction: User is not old enough to play");
    }

    sessionStorage.setItem('user', username);
    sessionStorage.setItem('age', age);
}
document.querySelector("#btn-login").addEventListener('click', userGeneration);


if (sessionStorage.user) {

    document.querySelector('#login').innerText = sessionStorage.getItem('user');

}

//Function to display date and time
function dateTime() {

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    month = zeroCheck(month);
    day = zeroCheck(day);
    m = zeroCheck(m);
    s = zeroCheck(s);
    h = zeroCheck(h);

    document.querySelector('#dnT').innerText = "Todays date: " + day + "/" + month + "/" + year + "-" + h + ":" + m + ":" + s;


    setInterval(dateTime, 1000);

}

function zeroCheck(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

document.body.addEventListener('load', dateTime());


document.querySelector('#day').value = new Date().getDay();

//Function to redirect visitors to another webpage on weekends
document.querySelector('#day').addEventListener('change', () => {
    console.log(document.querySelector('#day').value);

    if (document.querySelector('#day').value == 6 || document.querySelector('#day').value == 0) {
        window.location.href = "/pages/closed.html"
    }

});

//Function for changing text and background color
function colorsBackground() {
    let red = document.querySelector('#red1').value;
    let green = document.querySelector('#green1').value;
    let blue = document.querySelector('#blue1').value;

    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.querySelector('#output1').innerText = 'rgb(' + red + ',' + green + ',' + blue + ')';

    localStorage.setItem('storedbgColor', document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')');


}
document.body.addEventListener('load', colorsBackground);


//Color
function colorsText() {
    let red = document.querySelector('#red2').value;
    let green = document.querySelector('#green2').value;
    let blue = document.querySelector('#blue2').value;

    document.body.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.querySelector('#output2').innerText = 'rgb(' + red + ',' + green + ',' + blue + ')';

    localStorage.setItem('storedColor', document.querySelector("#head").style.color = 'rgb(' + red + ',' + green + ',' + blue + ')');


}
document.body.addEventListener('load', colorsText);


function toggleRGB() {
    const color1 = document.querySelector('#rgb-container1');
    const color2 = document.querySelector('#rgb-container2');
    const output1 = document.querySelector('#output1');
    const output2 = document.querySelector('#output2');

    if (color1.style.display == 'flex' && color2.style.display == 'flex') {
        color1.style.display = 'none';
        color2.style.display = 'none';

    } else {
        color1.style.display = 'flex';
        color2.style.display = 'flex';
    }

    if (output1.style.display == 'flex' && output2.style.display == 'flex') {
        output1.style.display = 'none';
        output2.style.display = 'none';

    } else {
        output1.style.display = 'flex';
        output2.style.display = 'flex';
    }



}


if (localStorage.storedbgColor) {

    document.body.style.backgroundColor = localStorage.storedbgColor;

}

else if (!localStorage.storedbgColor) {
    red = "0"
    green = "0"
    blue = "0"

    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
console.log(localStorage.getItem('storedbgColor'))

if (localStorage.storedColor) {

    document.body.style.color = localStorage.storedColor;

}

else if (!localStorage.storedColor) {
    red = "255"
    green = "255"
    blue = "255"

    document.body.style.color = localStorage.storedColor;
}
console.log(localStorage.getItem('storedColor'))



// Set a time limit for the current game session
function gameTimer() {
    console.log("gameTimer()");

    let timeLimit = (document.querySelector('#selectTimeLimit').value) * 60000; //timeLimit in milliseconds
    let currentTime = new Date();
    let sessionEnd = new Date();

    sessionEnd.setTime(currentTime.getTime() + timeLimit);

    // Add zero to to digits with zeroCheck()
    let endH = zeroCheck(sessionEnd.getHours());
    let endM = zeroCheck(sessionEnd.getMinutes());
    let endS = zeroCheck(sessionEnd.getSeconds());

    function sessionTimer() {
        var now = new Date().getTime();
        var timeLeft = sessionEnd.getTime() - now;

        console.log("now: " + now);
        console.log("timeLeft: " + timeLeft);

        var hrLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        let sessionTimerOutput = document.querySelector('#sessionTimer');

        sessionTimerOutput.innerText = `Time left: ${zeroCheck(hrLeft)}:${zeroCheck(minLeft)}:${zeroCheck(secondsLeft)}`;

        if (timeLeft == 0) {
            clearInterval(sessionTimer)
            setTimeout(() => {
                alert("Time limit reached, closing casino in 3 seconds")
                window.location.href = "./closed.html"
            }, 3000);
        }
        setInterval(sessionTimer, 1000);
    }

    let sessionEndOutput = `${endH}:${endM}:${endS}`;
    console.log("timeLimit: " + timeLimit);
    console.log(currentTime);
    console.log(sessionEnd);
    document.querySelector('#deadline').innerText = "Your session will end: " + sessionEndOutput;
    
    sessionTimer()
}

document.querySelector('#setTimeLimit').addEventListener('click', gameTimer);

// Collect user information
window.addEventListener('load', function () { // userTracking
    console.log("userTracking init");
    let platform = navigator.userAgent; // Browser/platform
    let language = navigator.language; // User language
    let windowRes = window.outerWidth + "x" + window.outerHeight; // Browser window resolution
    let screenRes = screen.width + "x" + screen.height; // Screen resolution

    console.log(`User browser/platform: ${platform}`)
    console.log(`User language: ${language}`)
    console.log(`Browser window resolution: ${windowRes}`)
    console.log(`Screen resolution: ${screenRes}`)

    getLocation();

    // localStorage counter for total games played
    if (localStorage.gamesPlayed) {
        let count = localStorage.getItem('gamesPlayed');
        document.querySelector("#game-counter").innerText = `
        Games played: ${count}
    `
    }
    else {
        localStorage.setItem('gamesPlayed', 0);
    }
});
// Get user location
function getLocation() {
    console.log("getLocation()");
    let response = "User location: ";

    function getCoords(position) {
        console.log(response + "\n Latitude: " + position.coords.latitude + "\n Longitude: " + position.coords.longitude);
    }

    function geolocationError() {
        console.log(response + "Error: Permission denied by user");
    }
    navigator.geolocation.getCurrentPosition(getCoords, geolocationError);
}
<<<<<<< HEAD
=======

function geoPermissionHandler() {
    let geoPermission = sessionStorage.getItem('geoPermission');
    navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
        if (geoPermission === 'granted') {
            permission.state = 'granted';
        }
        else if (geoPermission === 'denied') {
            permission.state = 'denied';
        }
    })
}
>>>>>>> ebd008b10fa43a386130d9f1dc32246ab53faeff
