var x = Number(prompt("N1: "));
var opcion = Number(prompt("opcion: "));

switch(opcion){
    case 1:
        document.write("Respuesta = " + factorial(x));
        break;

    default:
        break;
}

function factorial(x){
    var tot = 1;
    for(i = 1; i<= x; i++){
        tot = tot*i;
    }
    return tot;
}