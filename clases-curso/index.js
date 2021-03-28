// array de prueba

// let personas = [
// 	{
// 		nombre: {
// 			primerNombre: "Juan",
// 			segundoNombre: "Francisco",
// 			apellido: "Aguirre",
// 		},
// 		edad: 26,
// 	},
// 	{
// 		nombre: {
// 			primerNombre: "Guido",
// 			segundoNombre: "",
// 			apellido: "Lo Pinto",
// 		},
// 		edad: 18,
// 	},
// 	{
// 		nombre: {
// 			primerNombre: "Valentin",
// 			segundoNombre: "",
// 			apellido: "Gonzalez",
// 		},
// 		edad: 22,
// 	},
// 	{
// 		nombre: {
// 			primerNombre: "Jose",
// 			segundoNombre: "Ricardo",
// 			apellido: "Luareano",
// 		},
// 		edad: 14,
// 	},
// ];

// // // utilizando for

// // for (let i = 0; i < personas.length; i++) {
// // 	personas[i] = {
// // 		...personas[i],
// // 		esMayorDeEdad: null,
// // 		hobbies: [],
// // 	};
// // }

// // // utilizando forEach pasandole una funcion en lugar de expandir la funcion anonima adentro (como se ve a continuavion)

// // // forma vieja de escribir las funciones

// // function agregarMayoriaDeEdad(persona, i, array) {
// // 	array[i] = {
// // 		...persona,
// // 		esMayorDeEdad: null,
// // 	};
// // 	console.log(array[i]);
// // }

// // // forma nueva de escribir las funciones (arrow function): se quita la palabra function, se quita el nombre de la funcion y se agrega una flecha

// // let agregarMayoriaDeEdadConArrowFunction = (persona, i, array) => {
// // 	array[i] = {
// // 		...persona,
// // 		esMayorDeEdad: null,
// // 	};
// // 	console.log(array[i]);
// // };

// // // let personas1 = personas.forEach(agregarMayoriaDeEdad);

// // // utilizando forEach con funcion anonima adentro

// // let personas2 = personas.forEach((persona, i, personas) => {
// // 	personas[i] = {
// // 		...persona,
// // 		esMayorDeEdad: null,
// // 	};
// // 	persona = personas[i];
// // 	console.log(persona);
// // });

// // utilizando map

// let personas3 = personas.map((persona) => {
// 	// usando if

// 	// if (persona.edad > 18) {
// 	// 	persona = {
// 	// 		...persona,
// 	// 		esMayorDeEdad: true,
// 	// 	};
// 	// } else {
// 	// 	persona = {
// 	// 		...persona,
// 	// 		esMayorDeEdad: false,
// 	// 	};
// 	// }

// 	// // usando operador ternario v1.0

// 	// persona.edad >= 18
// 	// 	? (persona = { ...persona, esMayorDeEdad: true })
// 	// 	: (persona = { ...persona, esMayorDeEdad: false });

// 	// // usando operador ternario v2.0

// 	persona = { ...persona, esMayorDeEdad: persona.edad >= 18 ? true : false };

// 	return persona;
// });
// console.log(personas);
// console.log(personas3);


// let personas4 = personas.map((persona)=>{
// 	for (let i = 0; i < personas.length; i++) {
// 		persona[i]={
// 			hobbies:"desarrollarPaginasWes!- ;) ",
// 			cursosPorRealizar: "DesarrolladorFullStack",				
// 			}
// 			return persona;
// 		}
// 	}
// )

// console.log(personas4);
// Cree un nuevo objeto
let personasDatos =[
{
	nombre:{
		primerNombre: "Antonio",
		segundoNombre: undefined,
		apellidoCompleto: "Ludueña Bereziuk",
	},
	edad:34,
	competencias:{
		empleo:undefined,
	    estudiosAlcanzados:undefined,
	    numeroDocumento:null,
    },
},

{	
    nombre:{
		primerNombre: "Sergio",
		segundoNombre: undefined,
		apellidoCompleto: "Petroff",
	},
	edad:42,
	competencias:{
		empleo:undefined,
	    estudiosAlcanzados:undefined,
	    numeroDocumento:null,
    },
},

{	
    nombre:{
		primerNombre: "Pablo",
		segundoNombre: undefined,
		apellidoCompleto: "Petroff",
	},
	edad:45,
	competencias:{
		empleo:undefined,
	    estudiosAlcanzados:undefined,
	    numeroDocumento:null,
    },
}]
console.log(personasDatos);
// // // utilizando for

// // for (let i = 0; i < personas.length; i++) {
// // 	personas[i] = {
// // 		...personas[i],
// // 		esMayorDeEdad: null,
// // 		hobbies: [],
// // 	};
// // }

for (let i = 0; i < personasDatos.length; i++) {
	 personasDatos[i]={
		 ...personasDatos[i],
		 estudiosAlcanzados:"Univeristarios",
	 }
}

// let personas3 = personas.map((persona) => {
// 	// usando if

// 	// if (persona.edad > 18) {
// 	// 	persona = {
// 	// 		...persona,
// 	// 		esMayorDeEdad: true,
// 	// 	};
// 	// } else {
// 	// 	persona = {
// 	// 		...persona,
// 	// 		esMayorDeEdad: false,
// 	// 	};
// 	// }

// 	// // usando operador ternario v1.0

// 	// persona.edad >= 18
// 	// 	? (persona = { ...persona, esMayorDeEdad: true })
// 	// 	: (persona = { ...persona, esMayorDeEdad: false });

// 	// // usando operador ternario v2.0

// 	persona = { ...persona, esMayorDeEdad: persona.edad >= 18 ? true : false };

// 	return persona;
// });
let condicion=personasDatos.map((personasDatos)=>{
	{
		personasDatos.edad<=42
		?(personasDatos = {...personasDatos, puedeTrabajar: true})
		:(personasDatos = {...personasDatos, puedeTrabajar: false});
	}return  personasDatos;
	}
)

let nacionalidad=personasDatos.map((personasDatos)=> {
	for (let i = 0; i < personasDatos.length; i++) {
		personasDatos[i]={
			...personasDatos[i],
			nacionalidad: Argentino,
		}
		
	}
})
console.log(condicion);
console.log(nacionalidad);
// for (let i = 0; i < personas.length; i++) {
// 	let nombre1=personas[i].nombre.primerNombre;
// 	//console.log(personas[i].nombre);
// 	 personas[i]={
// 		 ...personas[i],
// 		 edad: personas[i].edad*2,
// 		 nombre: {
// 			 ...personas[i].nombre,
// 			 primerNombre: nombre1+ ' -',
// 		 }
// 	 };