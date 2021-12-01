let debut = document.getElementById('debut');
let fin = document.getElementById('fin');
let button = document.getElementById('button');
let buttonEnd = document.getElementById('buttonEnd');

document.getElementById("button")
    .addEventListener("click", function() {
        debut.classList.add('d-none');
        fin.classList.add('d-grid');
        fin.classList.remove('d-none');
    }, false);

buttonEnd.onclick = () => {
    debut.classList.remove('d-none');
    fin.classList.remove('d-grid');
    fin.classList.add('d-none');
}



/*experience*/

let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let button1 = document.getElementById('button1');
let buttonCLose = document.getElementById('buttonClose');

document.getElementById("button1")
    .addEventListener("click", function() {
        m1.classList.add('d-none');
        m2.classList.add('d-flex');
        m2.classList.remove('d-none');
    }, false);

buttonCLose.onclick = () => {
    m1.classList.remove('d-none');
    m2.classList.remove('d-flex');
    m2.classList.add('d-none');
}



let m3 = document.getElementById('m3');
let m4 = document.getElementById('m4');
let button2 = document.getElementById('button2');
let buttonCLose2 = document.getElementById('buttonClose2');

document.getElementById("button2")
    .addEventListener("click", function() {
        m3.classList.add('d-none');
        m4.classList.add('d-flex');
        m4.classList.remove('d-none');
    }, false);

buttonCLose2.onclick = () => {
    m3.classList.remove('d-none');
    m4.classList.remove('d-flex');
    m4.classList.add('d-none');
}



let m5 = document.getElementById('m5');
let m6 = document.getElementById('m6');
let button3 = document.getElementById('button3');
let buttonCLose3 = document.getElementById('buttonClose3');

document.getElementById("button3")
    .addEventListener("click", function() {
        m5.classList.add('d-none');
        m6.classList.add('d-flex');
        m6.classList.remove('d-none');
    }, false);

buttonCLose3.onclick = () => {
    m5.classList.remove('d-none');
    m6.classList.remove('d-flex');
    m6.classList.add('d-none');
}


let m7 = document.getElementById('m7');
let m8 = document.getElementById('m8');
let button4 = document.getElementById('button4');
let buttonCLose4 = document.getElementById('buttonClose4');

document.getElementById("button4")
    .addEventListener("click", function() {
        m7.classList.add('d-none');
        m8.classList.add('d-flex');
        m8.classList.remove('d-none');
    }, false);

buttonCLose4.onclick = () => {
    m7.classList.remove('d-none');
    m8.classList.remove('d-flex');
    m8.classList.add('d-none');
}





let buttonAle = document.getElementById('cv');

buttonAle.onclick = () => {
    alert('Attention le formulaire et le téléchargement de mon CV ne sont pas encore disponible. Merci de votre compréhension.');
}