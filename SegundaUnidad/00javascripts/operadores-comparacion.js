
let a = 10;
let b = 5;
let c = "10";

console.log("¿a es mayor que b?:", a > b);     
console.log("¿a es menor que b?:", a < b);     
console.log("¿a es igual a b?:", a == b);     

console.log("¿a es igual a c (con ==)?:", a == c);   // true (compara solo valor)
console.log("¿a es igual a c (con ===)?:", a === c); // false (compara valor y tipo)

console.log("¿a es diferente a b?:", a != b);  


console.log("¿a es mayor que b Y b es positivo?:", (a > b) && (b > 0)); 


console.log("¿a es menor que b O a es igual a c?:", (a < b) || (a == c)); 