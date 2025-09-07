document.addEventListener("DOMContentLoaded", function() {{
    const heartCount = document.getElementById("heart-count");
    const coinCount = document.getElementById("coin-count");
    const copyCount = document.getElementById("copy-count")
    const history = [];

    const hearts = document.getElementsByClassName("heart");
    for (heart of hearts) {
        heart.addEventListener("click", function() {
            heartCount.innerText = parseInt(heartCount.innerText) + 1;
        });
    };

    const callbuttons = document.getElementsByClassName("call-button");
    for (callbutton of callbuttons) {
        callbutton.addEventListener("click", function(event) {
            // Checking balance
            if (parseInt(coinCount.innerText) < 20) {
                alert("Not enough coins");
                return;
            };

            coinCount.innerText = parseInt(coinCount.innerText) - 20;
            
            const callInfoList = event.target.parentNode.parentNode.getElementsByTagName("h1");
            const serviceName = callInfoList[0].innerText;
            const serviceNumber = callInfoList[1].innerText;

            alert(`Service Name: ${serviceName}, Service Number: ${serviceNumber}`);
            
            history.push({
                serviceName, 
                serviceNumber,
                date: new Date()
            });
        });
    };

    const copyButtons = document.getElementsByClassName("copy-button");
    for (copyButton of copyButtons) {
        copyButton.addEventListener("click", function(event) {
            copyCount.innerHTML = parseInt(copyCount.innerText) + 1;
            
            const serviceNumber = event
            .target
            .parentNode
            .parentNode
            .getElementsByTagName("h1")[1].innerHTML;

            alert(`Service Number ${serviceNumber} Copyed`);
            navigator.clipboard.writeText(serviceNumber);
        });
    }
}});