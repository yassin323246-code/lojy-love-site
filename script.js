const envelope = document.getElementById("envelope");
const content = document.getElementById("content");
const hint = document.querySelector(".hint");
const message = document.getElementById("message");

envelope.addEventListener("click", function() {

    envelope.classList.add("open");

    setTimeout(function() {
        content.classList.remove("hidden");
        hint.style.display = "none";
    }, 1000);

});

document.querySelectorAll(".reason").forEach(button => {

    button.addEventListener("click", function() {
        message.textContent = button.dataset.message;
        message.classList.remove("hidden");
    });

});

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "5s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 700);