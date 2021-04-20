(function () {
    'use strict';

    const myForm = document.querySelector("body");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const noun01 = document.querySelector("#noun01").value;
        const noun02 = document.querySelector("#noun02").value;
        const adj = document.querySelector("#adj").value;
        const verb = document.querySelector("#verb").value;

        for (let field of document.querySelectorAll("input[type=text]"))
            field.value = "";

        let text = `Your words: ${noun01}, ${noun02}, ${adj}, ${verb}`;
        madlib.innerHTML = text;
    });
})();
