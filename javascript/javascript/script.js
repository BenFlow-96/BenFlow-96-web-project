document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("gameForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const favoriteGame = document.getElementById("favoriteGame").value;

        responseMessage.innerHTML = `<p>Thanks, ${username}! Your favorite game is ${favoriteGame}. Great choice!</p>`;

        form.reset();
    });
});