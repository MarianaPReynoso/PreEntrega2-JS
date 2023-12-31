const pidieronPrestamo = [
    {id: 1, alias: "Virginia Castro", tipo: "Préstamo Simple", numCuotas: 24},
    {id: 2, alias: "Fernando Arabia", tipo: "Préstamo Premium", numCuotas: 36},
    {id: 3, alias: "Josefina Perez", tipo: "Préstamo Premium", numCuotas: 36},
    {id: 4, alias: "Alma Zulema", tipo: "Préstamo Simple", numCuotas: 12},
    {id: 5, alias: "Oliver Gomez", tipo: "Préstamo Simple", numCuotas: 24}
];

const ingresonWeb = ["Virginia Castro", "Fernando Arabia", "Marisol Lopez", "José Guzman", "Josefina Perez", "Jimena Galli", "Alma Zulema", "Oliver Gomez"];

let nombre = prompt("Ingrese su nombre:").toUpperCase();
let apellido = prompt ("Ingrese su apellido:").toUpperCase();
let nombreCompleto = nombre + " " + apellido;
alert ("¡Bienvenido! " + nombreCompleto)

let pedirPrestamo = prompt("¿Le gustaría solicitar un préstamo con nosotros? (Si, No)").toUpperCase();
let valorPrestamo;  

const TNA = 138;
const TEA = 268;
const CFTEA = 376;
const maximoSolicitado = 2000000;
const tipoPrestamo = new Prestamo ("Préstamo Simple", 1000000);
const tipoPrestamo2 = new Prestamo ("Préstamo Premium", 2000000);
let interesCuota; 

if (pedirPrestamo == "SI"){
    valorPrestamo = parseFloat(prompt("¡Genial! Indíquenos la suma a la cual quiere acceder (Máx: $"+ maximoSolicitado + ")"));
        if (valorPrestamo <= 1000000){
            alert(`Muy bien, a seleccionado el ${tipoPrestamo.nombre}, sus $${valorPrestamo} serán depositados en su cuenta bancaria`);
        } else {
            alert(`Muy bien, a seleccionado el ${tipoPrestamo2.nombre}, sus $${valorPrestamo} serán depositados en su cuenta bancaria`);
        }

    while(valorPrestamo > maximoSolicitado){
        valorPrestamo = parseFloat(prompt("¡Genial! Indíquenos la suma a la cual quiere acceder(Máx: $"+ maximoSolicitado + ")"));

        if (valorPrestamo <= maximoSolicitado){
            break;
        }
    }

    let cantidadCuotas = cuotas();

    if(cantidadCuotas == 12){
        interesCuota = 30;
    } else if (cantidadCuotas == 24){
        interesCuota = 40;
    } else {
        interesCuota = 50;
    }

    let cuotaPura = valorPrestamo / cantidadCuotas;
    let interesPrestamo = interesCuota / cantidadCuotas;
    let tnaCuota = TNA / cantidadCuotas;
    let teaCuota = TEA / cantidadCuotas;
    let cfteaCuota = CFTEA / cantidadCuotas;

    let interesPorCuota = (cuotaPura * interesPrestamo) / 100;
    let interesTnaCuota = (cuotaPura * tnaCuota) / 100;
    let interesTeaCuota = (cuotaPura * teaCuota) / 100;
    let interesCfteaCuota = (cuotaPura * cfteaCuota) / 100;

    let valorCuota = cuotaPura + interesPorCuota + interesTnaCuota + interesTeaCuota + interesCfteaCuota;

    alert(`Su préstamo de $${valorPrestamo} será devuelto en ${cantidadCuotas} cuotas con un interés del ${interesCuota}%. Cada cuota tendrá un valor de $${valorCuota.toFixed(2)}`)

    pidieronPrestamo.push(nombreCompleto);
    console.log(pidieronPrestamo);
}else{
    alert("¡Lo invitamos a seguir navegando!");
    ingresonWeb.push(nombreCompleto);
}

const numeDeCuotas = pidieronPrestamo.find(item => item.numCuotas == 12);
console.log(numeDeCuotas);

ingresonWeb.forEach(item => {
    console.log(item);
})