var monto = parseInt(prompt("Ingrese el monto del crédito: "));
var plazo = parseInt(prompt("Ingrese el plazo en meses"));
var tasa = parseInt(prompt("Ingrese la tasa mensual: "));

var numerador = monto * (tasa / 100);
var denominador = 1 - (Math.pow((1 + (tasa / 100)), -plazo));
var cuota = numerador / denominador;

document.write(" Período  Interés  Amortización  Cuota  Saldo <br>");

for (let i = 1; i <= plazo; i++) {
    monto;
    interes = monto * tasa / 100;
    amortizacion = cuota - interes;
    monto -= amortizacion;
    document.write(i + "---" + interes.toFixed(2) + "---" + amortizacion.toFixed(2) + "---" + cuota.toFixed(2) + "---" + monto.toFixed(2) + "<br>");
}
