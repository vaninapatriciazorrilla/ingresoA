/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let pesoK;
  let tipo;
  let productos;
  let liquidosCarosPrecio;
  let liquidosCarosMarca;
  let solidosLivianosMarca;
  let solidosLivianosPeso;
  let flagPliq=0;
  let flagPsol=0;
  let acumPesoTotal =0;
  do {
    marca = prompt("Ingrese marca del producto"); 
    tipo= prompt('ingrese el tipo "solido" o "liquido"');
    while (!(tipo == "solido" || tipo =="liquido")) {
      tipo= prompt('ingrese bien el  tipo "solido" o "liquido"');
    }
    pesoK = parseFloat(prompt("Ingrese el peso"));
    while (pesoK <= 0 || isNaN(pesoK)) {
      pesoK = parseFloat(prompt("Ingrese el peso"));
    }
    while (precio <= 0 || isNaN(precio)) {
      precio =parseFloat(prompt("ingrese el precio correcto de las bolsas"));
    }
    //peso total
    acumPesoTotal += pesoK;

    switch (tipo) {
      case ("liquido"):
        if (flagPliq == 0 || precio > liquidosCarosPrecio){
            liquidosCarosPrecio = precio;
            liquidosCarosMarca = marca;
            flagPliq= 1;
        }
        break;
    
      case("solido"):
      if (!(flagPsol) || pesok < solidosLivianosPeso){
        solidosLivianosPeso = pesoK;
        solidosLivianosPesoMarca = marca;
        flagPsol= 1;
    }
    break;
    }
    
    productos = prompt('ingrese "si" si desea continuar').toLowerCase();
    } while (productos == "si");

    console.log("A. El peso total de la compra es: " + acumPesoTotal);
    console.log("B. El producto líquido más caro es marca " + liquidosCarosMarca + " y cuesta $" + liquidosCarosPrecio);
    console.log("C. El producto sólido más liviano es marca " + solidosLivianosPesoMarca + " y pesa " + solidosLivianosPeso + "kg.");
  
}