function cuentasUsuario() {
    var cuenta = document.getElementById("cuenta"),
    saldoActual = document.getElementById("saldoActual");
    saldoActual.value = cuenta.value;
}


     function depositarDinero() {
         var deposito = parseInt(document.getElementsByName("deposito")[0].value);
             saldoActual.value = parseInt(saldoActual.value)+deposito;
           alert("Monto depositado :" +saldoActual.value);
   }



   function retirarDinero() {

       var retiro = parseInt(document.getElementsByName("retirar")[0].value);  
           if (retiro > parseInt(saldoActual.value)) {
              alert("Error, no hay fondos disponibles : "+saldoActual);
     } else {
       saldoActual.value = parseInt(saldoActual.value)-retiro;
     }
   }

   function verificarSaldo() {
         document.getElementsByName("verificar")[0].value = saldoActual.value;

   }
   