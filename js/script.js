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


// Recupero informazioni utente tramite Bottone "Genera"
createTicketBtn.addEventListener ('click', function(){
  console.log(userName.value);
  console.log(userAge.value);
  console.log(userKm.value);
  
  const name = userName.value;
  ticketName.innerText = name;
  userName.value = "";

  const km = userKm.value;
  userKm.value = "";

  const age = userAge.value;
  userAge.value = "";

});

// Resetto informazioni utente tramite Bottone "Annulla"
resetBtn.addEventListener('click', function(){
  userName.value = "";
  userKm.value = "";
  userAge.value = "";

})