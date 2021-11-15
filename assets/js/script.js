let debut = document.getElementById('debut');
let fin = document.getElementById('fin');
let button = document.getElementById('button');

document.getElementById("button")
    .addEventListener("click", function() {
        document.getElementById("debut").hidden = true;
        document.getElementById("fin").hidden = false;
    }, false);

let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let button1 = document.getElementById('button1');

document.getElementById("button1")
    .addEventListener("click", function() {
        document.getElementById("m1").hidden = true;
        document.getElementById("m2").hidden = false;
    }, false);

let m3 = document.getElementById('m3');
let m4 = document.getElementById('m4');
let button2 = document.getElementById('button2');

document.getElementById("button2")
    .addEventListener("click", function() {
        document.getElementById("m3").hidden = true;
        document.getElementById("m4").hidden = false;
    }, false);

let m5 = document.getElementById('m5');
let m6 = document.getElementById('m6');
let button3 = document.getElementById('button3');

document.getElementById("button3")
    .addEventListener("click", function() {
        document.getElementById("m5").hidden = true;
        document.getElementById("m6").hidden = false;
    }, false);

let m7 = document.getElementById('m7');
let m8 = document.getElementById('m8');
let button4 = document.getElementById('button4');

document.getElementById("button4")
    .addEventListener("click", function() {
        document.getElementById("m7").hidden = true;
        document.getElementById("m8").hidden = false;
    }, false);