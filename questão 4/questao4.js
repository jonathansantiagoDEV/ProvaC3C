resu=[];
for( let num = 1; num <= 45 ; num ++){
    if(num % 5 == 0){

        resu.push("Luidy");
    
     } if(num % 9 == 0){
    
        resu.push("Moura");
    
     }
    
     if (num % 5 == 0 && num % 9 == 0){
    
        resu.push("LuidyMoura");
    
     }
    
     if (num % 5 != 0 || num% 9 != 0) {
    
        resu.push(num);
    
     }
     console.log(resu);
       
    }
    
    
    