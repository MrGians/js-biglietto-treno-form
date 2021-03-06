/* 
- Recupero scelta Nome dall'utente
- Recupero scelta del numero di Km da percorrere dall'utente
- Recupero scelta Età dall'utente
- Validazione inserimento Dati Utente

- Definire il prezzo del biglietto (0,21 € al KM)
- Calcolo eventuale scontistica del prezzo finale

- Calcolare il prezzo Finale del biglietto + Output con massimo 2 decimali stampato su pagina

- Bonus
*/


// Definisco variabili globali
const userName = document.getElementById("user-name");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");
const createTicketBtn = document.getElementById("create-ticket-btn");
const resetBtn = document.getElementById("reset-btn");

const userTicket = document.getElementById("user-ticket");
const ticketName = document.getElementById("ticket-name");
const ticketDiscount = document.getElementById("ticket-discount");
const ticketCab = document.getElementById("cab");
const ticketCpCode = document.getElementById("cp-code");
const ticketFinalPrice = document.getElementById("ticket-final-price");

const validationMessage = document.getElementById("validation-message");



// Recupero informazioni utente tramite Bottone "Genera"
createTicketBtn.addEventListener ('click', function() {

  const name = userName.value;
  const km = parseInt(userKm.value);
  const age = userAge.value;

  // Validazione inserimento dati utente
  if (!isNaN(name) || isNaN(km) || km <= 0) {

    // Non crea nessun biglietto
    validationMessage.innerText = "Ops! Non hai inserito correttamente i dati, riprova."
    validationMessage.classList.add ("error");
    validationMessage.classList.remove ("correct");
    ticketFinalPrice.innerText = "Non calcolabile"

    userTicket.classList.add ("d-none");
    userTicket.classList.remove ("d-block");

  } else {

    // Procede con la creazione del biglietto + calcoli
    validationMessage.innerText = "Hai inserito correttamente tutti i dati, il tuo Biglietto è pronto!"
    validationMessage.classList.add ("correct");
    validationMessage.classList.remove ("error");

    userTicket.classList.remove ("d-none");
    userTicket.classList.add ("d-block");
    
    userName.value = "";
    userKm.value = "1";
    userAge.value = "standard";
    
    ticketName.innerText = name;


    // Definisco il prezzo del biglietto
    let price = 0.21 * km;

    // Calcolo eventuale Discount
    let discountMessage = "Biglietto Standard";

    if (age === "minor") {

      price *= 0.8;
      discountMessage = '<span class="correct">Sconto -20%</span>';

    } else if (age === "major") {

      price *= 0.6;
      discountMessage = '<span class="correct">Sconto -40%</span>';
    }

    ticketDiscount.innerHTML = discountMessage;


    // Calcolo Cab & Cp-Code
    let resultCab = Math.floor(Math.random() * 20) + 1;
    let resultCpCode = Math.floor(Math.random() * 99999) + 1;

    ticketCab.innerText = resultCab;
    ticketCpCode.innerText = resultCpCode;


    // Calcolo il prezzo finale del biglietto riportandolo a schermo
    ticketFinalPrice.innerText = price.toFixed(2) + "£";
    }

});



// Resetto informazioni utente tramite Bottone "Annulla"
resetBtn.addEventListener('click', function(){
  userName.value = "";
  userKm.value = "1";
  userAge.value = "standard";
  userTicket.classList.remove ("d-block");
  userTicket.classList.add ("d-none");

  validationMessage.innerText = "Completa correttamente tutti i campi";
  validationMessage.classList.remove ("error");
  validationMessage.classList.remove ("correct");

})