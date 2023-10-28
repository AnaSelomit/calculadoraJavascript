const numb1 = document.querySelector("#numb1");
const input = document.querySelector("#color");
const precio = 380000;
const btn = document.querySelector("#btn");

//console.log(Number(numb2));

const total = document.querySelector("#total");
const cantidad = document.querySelector("#cantidad");
const circle = document.querySelector("#circle");

btn.addEventListener("click", () => {
    const a = numb1.value;
    const b = precio;

    total.innerHTML = a * b;
    cantidad.innerHTML = numb1.value;
});

btn.addEventListener("click", () => {
    circle.style.background = input.value;
});
