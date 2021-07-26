let nombre = prompt(`hola, cual es tu nombre?`);
let num1 = parseInt(prompt(`${nombre}, ingresa el primer valor `));

if (num1 %2 == 0){
    alert(`el numero ${num1}, es par`)
}else{
    alert(`el numero ${num1}, es impar`)
}