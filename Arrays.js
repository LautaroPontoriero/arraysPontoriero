//debugger
let misMillas = prompt("Ingrese la cantidad de sus millas por favor:");

const ticket={destino:"BARILOCHE", millas: 68000, clase: "turista"}

const aereos=[];

function Vuelo(destino, millas, clase){
    this.destino= destino;
    this.millas= millas;
    this.clase= clase;

 }
const vueloNuevo= new Vuelo("CORDOBA", 50000, "primera");

function cargarvuelos(vuelo){
    if(misMillas > 50000){
        console.log("Usted puede acceder a los siguiente destinos:");
        console.log(aereos);
    return aereos.push(vuelo);

}  else{
 console.log("Lo siento. Usted no posee suficientes millas para acceder a un vuelo");
}

}

cargarvuelos(ticket);
cargarvuelos(vueloNuevo);


