// const form = document.querySelector('form');

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const height = document.getElementById("height").value
//     const weight = document.getElementById("weight").value
//     console.log(height, weight)
// });
let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let bmi = 0;
document.getElementById('calculate').addEventListener('click', (e) => {
    e.preventDefault()
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
         bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});

document.querySelector("#reset").addEventListener('click', (e) => {
    e.preventDefault();
    if( document.getElementById("height").value == "" || document.getElementById("weight").value==""){
        alert("Empty values");
    }
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    results.innerHTML = "";
})
