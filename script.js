let nombre = "Roller"
console.log(nombre);

let apellido = "Sosa"
console.log(apellido);

let estudiante = (`${nombre} ${apellido}`);
console.log(estudiante);

let estudianteMayus = "estudiante";
console.log(estudianteMayus.toUpperCase()); 

let estudianteMinus = "estudiante";
console.log(estudianteMayus.toLowerCase());

let numeroLetras = "estudiante";
console.log(numeroLetras.length); 

let letraNombre = "Roller";
console.log(letraNombre.startsWith("R"));

let letraNombre2 = "Sosa";
console.log(letraNombre.endsWith("S"));

let eliminaEspacios = "   estudiante   ";
console.log(eliminaEspacios.trim());

let nombreDentroVar = "Roller";
console.log(nombreDentroVar.includes(estudiante));
