var monto = parseInt(prompt("Ingrese el monto del crédito: "));
var plazo = parseInt(prompt("Ingrese el plazo en meses"));
var tasa = parseInt(prompt("Ingrese la tasa mensual: "));

var amortizacion = monto / plazo;

const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "COP" });

document.write(" Período  Interés  Amortización  Cuota  Saldo <br>");

for (let i = 1; i <= plazo; i++) {
    monto;
    var interes = monto * (tasa / 100);
    var cuota = amortizacion + interes;
    monto -= amortizacion;
    document.write(i + "---" + interes.toFixed(2) + "---" + amortizacion.toFixed(2) + "---" + cuota.toFixed(2) + "---" + monto.toFixed(2) + "<br>");
}


