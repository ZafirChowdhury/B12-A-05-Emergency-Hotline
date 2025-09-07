document.addEventListener("DOMContentLoaded", function() {{
    heartCount = document.getElementById("heart-count");

    const hearts = document.getElementsByClassName("heart");
    for (heart of hearts) {
        heart.addEventListener("click", function() {
            heartCount.innerText = parseInt(heartCount.innerText) + 1;
        });
    };
}});