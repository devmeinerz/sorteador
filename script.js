let min = document.getElementById("input_min");
let max = document.getElementById("input_max");
let names = document.getElementById("input_names");
let result = document.getElementById("result");

//NUMBERS____________________________________________________________________________________________________

//randomize the first with the last input value
//sorteia o primeiro e o último valor digitados no input
function sortNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//button 
function sortNumberBtn() {
    if (min.value === '' || max.value === '') {
        alert("Preencha os campos");
    } else {
        result.innerHTML = `<p style="font-size: 1rem; color:#ffffff";">Resultado:</p>`;
        result.innerHTML += `${sortNumbers(parseInt(min.value), parseInt(max.value))}`;
    }
}

//NAMES_____________________________________________________________________________________________________

//random a name from the names.value
//sorteia um nome de names.value
function sortNames() {
    return names.value.split(",")[Math.floor(Math.random() * names.value.split(",").length)];
}

//button
function sortNamesBtn() {
    if (names.value === '') {
        alert("Preencha os campos");
    } else {
        result.innerHTML = `<p style="font-size: 1rem; color:#ffffff";">Resultado:</p>`;
        result.innerHTML += `${sortNames()}`;
    }
}