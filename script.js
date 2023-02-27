/* 

-fai inserire la mail all'utente e memorizzala al click del button
-confronta la mail con quelle presenti nell'array

*/
let emails = ["ciccio@gmail.com" , "pluto@gmail.com" , "paperino@gmail.com"];

let logEl = document.getElementById("log");
let userEmailEl;



logEl.addEventListener("click" , function() {

    userEmailEl = document.getElementById("user-email").value;

     let i;

    for( i=0 ; i < emails.length; i++){

        if(userEmailEl == emails[i]){

            console.log("Benvenuto");

            i = emails.length;

        }
        
    }

    if(i == emails.length){

       alert("non sei registrato");
    }

})
    
        

    




