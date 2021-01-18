const myPanel = document.querySelectorAll(".panel");


for (let i = 0; i < myPanel.length; i++) {
    myPanel[i].addEventListener("click", function () {
        if (myPanel[i].classList.contains("active")) {
            removePanel();
        } else {
            removePanel();
            myPanel[i].classList.add("active");
        }


    });
}

function removePanel() {
    for (let j = 0; j < myPanel.length; j++) {
        myPanel[j].classList.remove("active");
    }
}

