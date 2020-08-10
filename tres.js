/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombreT;
	let lugar;
	let continuar;
	let temporada;
	let cantidadAcompañantes;
	let barilocheCont = 0;
	let cataratasCont= 0;
	let saltaCont = 0;
	let lugarMasEle;
	let canttitularConMasPas = 0;
	let flagtitularConMasPasajeros = f0;
	let titularConMasPasajerosCantNombre;
	let promedioInvierno = 0;
	let acumPersonasInvierno = 0;
	let contPersonasInvierno = 0;

	do {
		nombreT = prompt("Ingrese nombre del titular"); 
		while (!(isNaN(nombreT))) {
			nombreT = prompt("Inválido. Ingrese el nombre del titular");
		}

    	lugar= prompt('ingrese el lugar "bariloche", "cataratas" o "salta"');
    	while (!(lugar == "cataratas" || lugar =="bariloche" || lugar=="salta")) {
			  lugar= prompt('ingrese el lugar "bariloche", "cataratas" o "salta"');
			}
		temporada = prompt('Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”').toLowerCase();
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt('Inválido. Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”').toLowerCase();
		}

		cantidadAcompañantes = parseInt(prompt("Ingrese la cantidad de acompañantes"));
		while (cantidadAcompañantes < 0 || isNaN(cantidadAcompañantes)) {
			cantidadAcompañantes = parseInt(prompt("Inválido. Ingrese la cantidad de acompañantes"));
		}



    switch (lugar) {
		case "bariloche":
			barilocheCont++
			break;
		case "cataratas":
			cataratasCont++
			break;
		case "salta":
			saltaCont ++
			break;
	}
    continuar = prompt('ingrese "si" si desea continuar').toLowerCase();
    } while (continuar == "si");
	if (barilocheCont > cataratasCont && barilocheCont > saltaCont) {
		lugarMasElegido = "Bariloche";
	} else if (cataratasCont >= barilocheCont && cataratasCont > saltaCont) {
		lugarMasElegido = "Cataratas";
	} else {
		lugarMasElegido = "Salta";
	}
	console.log("A. El lugar más elegido para viajar es " + lugarMasElegido);
}
