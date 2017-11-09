var interval = setInterval(time, 1000); //Create a new variable that calls time() every 1000ms
function time() {
    var d = new Date(); // Get Date
    document.getElementById("time").innerHTML = d.toLocaleTimeString(); // Find the element with ID date, and change the text to the time, from date.
}