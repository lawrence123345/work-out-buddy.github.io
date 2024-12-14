// Function to change the background color
function changeBackgroundColor() {
    const colors = ['#ff7f7f', '#7fffd4', '#d3ff7f', '#7f7fff', '#ff7ff7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Change the text message after clicking the button
    document.getElementById("message").innerText = "The background color has changed!";
}
