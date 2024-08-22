
// Add current time
function currentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(currentTime, 1000);

// Add animation using jQuery
$(document).ready(function() {
    $('#intro').fadeIn(1000);
    $('#image').fadeIn(10000);
    $('#time').fadeIn(10000);
    $('footer').slideUp(10000);
});

