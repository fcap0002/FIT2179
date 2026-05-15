function incrementCounter() {
    var spanElement = document.getElementById("counter");
    var count = spanElement.getAttribute('numberOfClicks');
    count ++;
    spanElement.innerText = count;
    spanElement.setAttribute('numberOfClicks', count);x
}