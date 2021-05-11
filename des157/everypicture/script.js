(function () {
    "use strict";

    const leftButton = document.querySelector("#left");
    leftButton.disabled = true;
    const rightButton = document.querySelector("#right");
    const image = document.querySelector("#theImg");

    const frontInfoBoxes = document.querySelector("#frontInfoBoxes");
    frontInfoBoxes.classList.add("disabled");

    const backInfoBoxes = document.querySelector("#backInfoBoxes");
    backInfoBoxes.classList.add("disabled");

    let frontCover = true;
    let backCover = true;
    let imgNum = 0;

    const changePicture = () => {
        switch (imgNum) {
            case 0:
                if (!frontCover) {
                    image.setAttribute("src", "images/frontnocover.PNG");
                    frontInfoBoxes.classList.remove("disabled");
                    frontInfoBoxes.classList.add("enabled");
                } else {
                    image.setAttribute("src", "images/frontcover.PNG");
                    frontInfoBoxes.classList.add("disabled");
                    frontInfoBoxes.classList.remove("enabled");
                }
                break;
            case 1:
                image.setAttribute("src", "images/other.png");
                frontInfoBoxes.classList.add("disabled");
                frontInfoBoxes.classList.remove("enabled");
                backInfoBoxes.classList.add("disabled");
                backInfoBoxes.classList.remove("enabled");
                break;
            case 2:
                if (!backCover) {
                    image.setAttribute("src", "images/backnocover.png");
                    backInfoBoxes.classList.add("enabled");
                    backInfoBoxes.classList.remove("disabled");
                } else {
                    image.setAttribute("src", "images/backcover.png");
                    backInfoBoxes.classList.add("disabled");
                    backInfoBoxes.classList.remove("enabled");
                }
                break;
        }
    };

    image.addEventListener("click", function () {
        if (imgNum == 0) {
            frontCover = !frontCover;
            changePicture();
        } else if (imgNum == 2) {
            backCover = !backCover;
            changePicture();
        }
    });

    leftButton.addEventListener("click", function () {
        imgNum--;
        if (imgNum == 0) {
            leftButton.disabled = true;
        }
        if (imgNum < 2) {
            rightButton.disabled = false;
        }
        changePicture();
    });

    rightButton.addEventListener("click", function () {
        imgNum++;
        if (imgNum == 2) {
            rightButton.disabled = true;
        }
        if (imgNum > 0) {
            leftButton.disabled = false;
        }
        changePicture();
    });
})();
