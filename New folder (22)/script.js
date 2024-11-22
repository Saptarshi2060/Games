document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('message2').style.display = 'none';

    setTimeout(function() {
        document.getElementById('message2').style.display = 'block';
        document.getElementById('options').style.display = 'flex';
    }, 1500);
});

function handleResponse(response) {
    document.getElementById('message1').style.display = 'none';
    document.getElementById('message2').style.display = 'none';
    document.getElementById('options').style.display = 'none';

    if (response) {
        document.getElementById('message3').innerHTML = 
            "Hell Yeahhhhh! You make me so happy! 🌸 You are the most important person in my life, and I can't wait to cherish every moment with you. 💖";
        document.getElementById('message3').style.display = 'block';
        showPopup();
    } else {
        floatButton();
    }
}

function floatButton() {
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    setTimeout(function() {
        popup.classList.add('hidden');
    }, 3000); // Hide the popup after 3 seconds
}
