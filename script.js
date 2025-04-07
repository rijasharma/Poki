document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-games");
    const gameCards = document.querySelectorAll(".game-card");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const filter = searchInput.value.toLowerCase();
            gameCards.forEach(card => {
                if (card.textContent.toLowerCase().includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            
            if (usernameInput && passwordInput) {
                let username = usernameInput.value;
                let password = passwordInput.value;
                if (username === "Rija" && password === "Rija@123") {
                    window.location.href = "game.html";
                } else {
                    alert("Invalid username or password!");
                }
            }
        });
    }
});
