(function () {
    "use strict";

    const button = document.querySelector("button");
    const invoice = document.querySelector("#invoice");
    const total = document.querySelector("#total");
    total.style.display = "none";

    const services = {
        "oil change": 35,
        "tire rotation": 19,
        "car wash": 7,
        "car wax": 12,
    };

    let price = 0;
    let first = true;

    button.addEventListener("click", function () {
        let input = prompt("What service would you like?");
        input = input.toLowerCase();

        if (!(input in services)) {
            alert("That is not one of the services, please try again!");
        } else {
            if (first) {
                let serviceAddon = document.createElement("h3");
                let serviceText = document.createTextNode(
                    "Davy's auto shop invoice:"
                );
                serviceAddon.appendChild(serviceText);
                invoice.appendChild(serviceAddon);
                first = false;

                total.style.display = "";
            }
            let serviceAddon = document.createElement("p");
            let serviceText = document.createTextNode(
                "Service: " + input + ", $" + services[input]
            );
            serviceAddon.appendChild(serviceText);
            invoice.appendChild(serviceAddon);
            price += services[input];
            total.innerHTML = "Total price: $" + price;
        }
    });
})();
