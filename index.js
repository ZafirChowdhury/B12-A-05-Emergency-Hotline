document.addEventListener("DOMContentLoaded", function() {{
    const heartCount = document.getElementById("heart-count");
    const coinCount = document.getElementById("coin-count");
    const copyCount = document.getElementById("copy-count")

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
            const time = new Date().toLocaleTimeString();

            alert(`Calling ${serviceName} ${serviceNumber}...`);
            
            const callHistoryContainer = document.getElementById("call-history-container");

            const newCallHistory = document.createElement("div");
            newCallHistory.innerHTML = `
                <div class="flex justify-between gap-3 items-center p-4 rounded-lg bg-[#fafafa] mb-3">
                    <div class="left">
                        <h3 class="text-[16px] text-black font-semibold">${serviceName}</h3>
                        <p class="text-[18px] text-gray-500">${serviceNumber}</p>
                    </div>
                    <p class="text-gray-900 text-[18px]">${time}</p>
                </div>
            `;

            callHistoryContainer.appendChild(newCallHistory);
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

            alert(`Service Number ${serviceNumber} copyed to clipbord!`);
            navigator.clipboard.writeText(serviceNumber);
        });
    }

    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", function() {
        document.getElementById("call-history-container").innerHTML = "";
    });
}});
