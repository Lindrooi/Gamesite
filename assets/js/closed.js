

function nextMonday() {                                                         //Function to calculate and countdown to the next monday
    const date = new Date();
    date.setDate(date.getDate() + (((1 + 7 - date.getDay()) % 7) || 7));
    date.setHours(0, 0, 0, 0);
    const now = new Date().getTime();


    const distance = date - now;


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.querySelector("#countdown").innerHTML = "Visit us again in " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    setTimeout(nextMonday, 1000);
}
nextMonday();


document.querySelector('#day').value = new Date().getDay();
document.querySelector('#day').addEventListener('change', () => {                               //Function to redirect visitors to another site during weekends
    console.log(document.querySelector('#day').value);

    if (document.querySelector('#day').value != 6 || document.querySelector('#day') != 0) {
        window.location.href = "../index.html"
    }

});



function dateTime() {                       //Function to display todays date and time

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

    setTimeout(dateTime, 1000);



}

function zeroCheck(i) {
    if (i < 10) { i = "0" + i };
    return i;
}



document.body.addEventListener('load', dateTime());

