let debut = document.getElementById('debut');
let fin = document.getElementById('fin');
let button = document.getElementById('button');

document.getElementById("button")
    .addEventListener("click", function() {
        document.getElementById("debut").hidden = true;
        document.getElementById("fin").hidden = false;
    }, false);