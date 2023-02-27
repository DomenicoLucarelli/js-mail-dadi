/* 

-fai inserire la mail all'utente e memorizzala al click del button
-confronta la mail con quelle presenti nell'array
-se è presente fallo giocare
-altrimenti mostra un alert 

-genera dei numeri casuali da 1 a 6 sia per il computer che per l'utente
-se il numero utente è > del numero del computer ha vinto
-altrimenti se il numero utente è < del numero del computer ha perso
-altrimenti ha pareggiato

*/
let emails = ["ciccio@gmail.com" , "pluto@gmail.com" , "paperino@gmail.com"];

let logEl = document.getElementById("log");
let userEmailEl;



logEl.addEventListener("click" , function() {

    userEmailEl = document.getElementById("user-email").value;

    let i;

    for( i=0 ; i < emails.length; i++){

        if(userEmailEl == emails[i]){

            let welcomeTextEl = document.getElementById("welcome-text");

            welcomeTextEl.innerHTML =("Benvenuto");

            welcomeTextEl.style.color=("white");

            welcomeTextEl.style.fontWeight=("bold");

            welcomeTextEl.style.fontSize=("20px")

          

            

            i = emails.length;

            let gameEl = document.getElementById("game");

            gameEl.style.display = ("flex");

        }
        
    }

    if(i == emails.length){

       alert("non sei registrato");
    }

})



let generatorEl = document.getElementById("generator");

generatorEl.addEventListener("click" , function(){

    let userNumber = Math.floor(Math.random() * 6 + 1);
    
    let computerNumber = Math.floor(Math.random() * 6 + 1);

    let userImageEl = document.getElementById("user-image");

    userImageEl.innerHTML =(userNumber);

    let computerImageEl = document.getElementById("computer-image");

    computerImageEl.innerHTML =(computerNumber);

    let resultEl = document.getElementById("result");
    
    

    if(userNumber > computerNumber){

        resultEl.innerHTML=("Hai vinto")
        

    }else if(userNumber < computerNumber){

        resultEl.innerHTML=("Hai perso")


    }else{

        resultEl.innerHTML=("Pareggio: ritenta la fortuna")


    }

})
    
        

    




