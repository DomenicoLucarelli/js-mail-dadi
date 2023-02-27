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



let diceFaces = []

diceFaces[0]  = 'img/dice-one-solid.svg';
diceFaces[1]  = 'img/dice-two-solid.svg';
diceFaces[2]  = 'img/dice-three-solid.svg';
diceFaces[3]  = 'img/dice-four-solid.svg';
diceFaces[4]  = 'img/dice-five-solid.svg';
diceFaces[5]  = 'img/dice-six-solid.svg';

let generatorEl = document.getElementById("generator");

let userImageEl = document.getElementById("user-image");

let computerImageEl = document.getElementById("computer-image");

let resultEl = document.getElementById("result");

let userNumber

let computerNumber

let computerImage = new Image()

let userImage = new Image()

generatorEl.addEventListener("click" , function(){

    userNumber = Math.floor(Math.random() * 6  );

    userImage.src = diceFaces[userNumber]
    
    computerNumber = Math.floor(Math.random() * 6 );

    computerImage.src = diceFaces[computerNumber]

    userImageEl.appendChild(userImage);

    computerImageEl.appendChild(computerImage);
    
    

    if(userNumber > computerNumber){

                resultEl.innerHTML=("Hai vinto")
                
        
            }else if(userNumber < computerNumber){
        
                resultEl.innerHTML=("Hai perso")
        
        
            }else{
        
                resultEl.innerHTML=("Pareggio: ritenta la fortuna")
        
        
            }

})  
    




let resetEl = document.getElementById("reset");

resetEl.addEventListener("click" , function(){

   userImage.remove() 
   computerImage.remove()
   resultEl.innerHTML = ""
   


})



