/* 
- Recupero scelta Nome dall'utente
- Recupero scelta del numero di Km da percorrere dall'utente
- Recupero scelta Età dall'utente
- Validazione inserimento Dati Utente

- Definire il prezzo del biglietto (0,21 € al KM)
- Calcolo eventuale scontistica del prezzo finale

- Calcolare il prezzo Finale del biglietto * KM scelti dall'utente
- Output del prezzo finale con massimo 2 decimali stampato su pagina

- Bonus
*/


// Definisco variabili globali
const userName = document.getElementById("user-name");
const ticketName = document.getElementById("ticket-name");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");
const createTicketBtn = document.getElementById("create-ticket-btn");
const resetBtn = document.getElementById("reset-btn");

const ticketDiscount = document.getElementById("ticket-discount");
const ticketFinalPrice = document.getElementById("ticket-final-price");




// Recupero informazioni utente tramite Bottone "Genera"
createTicketBtn.addEventListener ('click', function() {

  const name = userName.value;
  const km = parseInt(userKm.value);
  const age = userAge.value;
  console.log("km: " + km);
  console.log("name: " + name);
  console.log("age: " + age);

  // TO DO VERIFICATION FROM HERE ***************************************
  if (!isNaN(name) || isNaN(km) || km <= 0) {
    // Non crea nessun biglietto
    console.log ("ERRORE CREAZIONE TICKET")

  } else {

  



    ticketName.innerText = name;
    userName.value = "";
    userKm.value = "";
    userAge.value = "standard";


    // Definisco il prezzo del biglietto
    let price = 0.21 * km;

    // Calcolo eventuale Discount
    let discountMessage = "Biglietto Standard";
    let hasDiscount = false;

    if (age === "minor") {

      hasDiscount = true;
      price *= 0.8;
      discountMessage = "Sconto -20%"

    } else if (age === "major") {

      hasDiscount = true;
      price *= 0.6;
      discountMessage = "Sconto -40%"
    }

    ticketDiscount.innerText = discountMessage;


    // Calcolo il prezzo finale del biglietto riportandolo a schermo
    ticketFinalPrice.innerText = price.toFixed(2) + "£";
    }

});



// Resetto informazioni utente tramite Bottone "Annulla"
resetBtn.addEventListener('click', function(){
  userName.value = "";
  userKm.value = "";
  userAge.value = "";

})