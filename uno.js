/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
    //declaro variables
    let nombre;
    let temperatura;
    let sexo;
    let edad;
    let edadPromedio;
    let mujerMasTemperatura;
    let nombreMujMasTemp;
    let contCantFem=0;
    let contCantMas=0;
    let flagTemperatura=0;
    let acumEdad;
    //generar un bucle que itere 5 veces(for)
	// dentro del bucle
	// pido los datos nombre , temperatura, sexo y edad.
	//debo validad los datos
    for (let i = 0 ; i < 5 ; i++){
        
        nombre = prompt('ingrese su nombre');
        while (!(isNaN(nombre))) {
			nombre = prompt("Inválido. Ingrese nombre");
		}
		sexo = prompt('ingrese el tipo "masculino" ; "femenino"').toLowerCase();
		while( sexo != "masculino" && sexo != "femenino") {
			sexo = prompt('incorrecto imgrese el tipo "masculino" o "femenino"').toLowerCase();
		}
		edad = parseInt(prompt("Ingrese la edad "));
		while (!( edad >= 0 && edad <=120  || isNaN(edad))){
			edad = parseInt(prompt("Incorrecto debe ingrese la edad "));
		}
		temperatura= parseFloat(prompt("ingrese la temperatura:"));
		while(temperatura <= 32 && temperatura > 44 || isNaN(temperatura)){
			temperatura= parseFloat(prompt("incorrecto debe ingresar la temperatura:"));
        }		
        
		acumEdad += edad;
		switch (sexo) {
			case "femenino":
				contCantFem++;
				if (flagTemperatura == 0 || temperatura > mujerMasTemperatura){
					mujerMasTemperatura = temperatura;
					nombreMujMasTemp = nombre;
                    flagTemperatura = 1;
				}
				break;
			case "masculino":
                contCantMas++ ;

				break;
		}
	}
    //hago los caculos que se realizan una vez

    edadPromedio = acumEdad / 5;

	
  //muestro la informacion
  //a)informar la cantidad de personas de cada sexo.
  console.log("A.  la cantidad de mujeres es: " + contCantFem 
  + "y la cantidad de hombres ingresados es: " + contCantMas); 
  
  //b)la edad promedio en total
  console.log("B. El promedio de todas las edades es de " + edadPromedio + ".");

  //c)la mujer con más temperatura(si la hay)
    if (flagTemperatura) {
        console.log("c Datos mujer con mas temperatura: nombre: "
            + nombreMujMasTemp + " tiene de temperatura: "
            + mujerMasTemperatura);
    
    } else {
        console.log("C no se compro encontro mujer con temperatura alta");
    

    }
  


}
