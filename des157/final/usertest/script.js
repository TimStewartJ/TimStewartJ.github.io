(function () {
    "use strict";

    const leftButton = document.querySelector("#left");
    leftButton.disabled = true;
    const rightButton = document.querySelector("#right");
    const image = document.querySelector("#theImg");
    const imageContainer = document.querySelector("#imgContainer");
    const header = document.querySelector("header");

    const frontOverlays = document.querySelectorAll(".frontOverlay");
    const frontOverlayText = [
        "<p>This is the PSU (650w Seasonic SFX). It supplies power to the rest of the system.</p>",
        "<p>This is the RAM (2x8gb Corsair Vengeance Red LED).</p>",
        "<p>This is the CPU cooler. Under it is the CPU (Ryzen 5 3600) and the motherboard (ASUS ROG B450i).</p>",
    ];

    const backOverlays = document.querySelectorAll(".backOverlay");
    const backOverlayText = [
        "<p>This is the GPU (GTX 1070). It is in charge of rendering graphics.</p>",
        "<p>This is the storage of the system. There is currently a 500gb SSD and a 2TB HDD.</p>",
    ];

    const coverButton = document.getElementById("cover");
    const expandButton = document.getElementById("expand");
    const expandIcon = document.getElementById("expandIcon");

    let overlayActive = false;

    for (let i = 0; i < 3; i++) {
        frontOverlays[i].classList.add("disabledOverlay");
        frontOverlays[i].addEventListener("mouseover", function (e) {
            console.log("mouse enter");
            if (!frontCover && !overlayActive && imgNum == 0) {
                e.target.classList.add("enabledOverlay");
                e.target.classList.remove("disabledOverlay");
                e.target.innerHTML = frontOverlayText[i];
                overlayActive = true;
            }
        });
        frontOverlays[i].addEventListener("mouseout", function (e) {
            console.log("mouse leave");
            overlayActive = false;
            e.target.classList.remove("enabledOverlay");
            e.target.classList.add("disabledOverlay");
        });
    }

    for (let i = 0; i < 2; i++) {
        backOverlays[i].classList.add("disabledOverlay");
        backOverlays[i].addEventListener("mouseover", function (e) {
            console.log("mouse enter");
            if (!backCover && !overlayActive && imgNum == 2) {
                e.target.classList.add("enabledOverlay");
                e.target.classList.remove("disabledOverlay");
                e.target.innerHTML = backOverlayText[i];
                overlayActive = true;
            }
        });
        backOverlays[i].addEventListener("mouseout", function (e) {
            console.log("mouse leave");
            overlayActive = false;
            e.target.classList.remove("enabledOverlay");
            e.target.classList.add("disabledOverlay");
        });
    }

    let expanded = false;

    expandButton.addEventListener("click", function () {
        expanded = !expanded;
        if (expanded) {
            imageContainer.classList.remove("imgSmall");
            imageContainer.classList.add("imgBig");
            header.classList.remove("bigHeader");
            header.classList.add("smallHeader");
            expandIcon.classList.remove("fa-expand-arrows-alt");
            expandIcon.classList.add("fa-compress-arrows-alt");
        } else {
            imageContainer.classList.add("imgSmall");
            imageContainer.classList.remove("imgBig");
            header.classList.add("bigHeader");
            header.classList.remove("smallHeader");
            expandIcon.classList.add("fa-expand-arrows-alt");
            expandIcon.classList.remove("fa-compress-arrows-alt");
        }
    });

    let frontCover = true;
    let backCover = true;
    let imgNum = 0;

    const changePicture = () => {
        switch (imgNum) {
            case 0:
                if (!frontCover) {
                    image.setAttribute("src", "images/frontnocover.PNG");
                    coverButton.innerHTML = "Put On Cover";
                } else {
                    image.setAttribute("src", "images/frontcover.PNG");
                    coverButton.innerHTML = "Remove Cover";
                }
                coverButton.disabled = false;
                break;
            case 1:
                coverButton.disabled = true;
                coverButton.innerHTML = "Remove Cover";
                image.setAttribute("src", "images/other.png");
                break;
            case 2:
                if (!backCover) {
                    image.setAttribute("src", "images/backnocover.png");
                    coverButton.innerHTML = "Put On Cover";
                } else {
                    image.setAttribute("src", "images/backcover.png");
                    coverButton.innerHTML = "Remove Cover";
                }
                coverButton.disabled = false;
                break;
        }
    };

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

    coverButton.addEventListener("click", function () {
        if (imgNum === 0) {
            frontCover = !frontCover;
            changePicture();
        } else if (imgNum === 2) {
            backCover = !backCover;
            changePicture();
        }
    });

    // alert for user test
    alert("Welcome to my user test!\nWhile you're here, please try some of the following things:\nHover over all of the numbers\nCheck out all perspectives\nTry to expand the viewport");

})();
