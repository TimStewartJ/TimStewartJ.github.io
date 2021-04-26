(function () {
    "use strict";

    const myForm = document.querySelector("body");
    const madlib = document.querySelector("#madlib");
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const noun01 = document.querySelector("#noun01").value;
        const name01 = document.querySelector("#name01").value;
        const noun02 = document.querySelector("#noun02").value;
        const adj01 = document.querySelector("#adj01").value;
        const verb01 = document.querySelector("#verb01").value;
        const adj02 = document.querySelector("#adj02").value;
        const noun03 = document.querySelector("#noun03").value;
        const adj03 = document.querySelector("#adj03").value;

        for (let field of document.querySelectorAll("input[type=text]"))
            field.value = "";

        let text = `Ahoy, Captain ${name01[0].toUpperCase()}${name01.substring(1).toLowerCase()}! Are you ready to find the long-lost treasure of ${noun01[0].toUpperCase()}${noun01.substring(1).toLowerCase()} Island?
         What do you mean your ship is too ${adj01.toLowerCase()} to take it there? Oh, I've got it! We should ${verb01.toLowerCase()} there 
         instead, we'll get there faster. Plus, we'll be able to use our brand-new ${adj02.toLowerCase()} ${noun02.toLowerCase()} to dig it up! 
         Anyway, we better get moving before our rival crew of the ${adj03[0].toUpperCase()}${adj03.substring(1).toLowerCase()} ${noun03[0].toUpperCase()}${noun03.substring(1).toLowerCase()} get to us! Set sail!`;
        input.classList.add("slideout");
        output.classList.add("slidein");
        madlib.innerHTML = text;
    });
})();
