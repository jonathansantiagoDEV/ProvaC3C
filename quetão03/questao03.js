bt.addEventListener('click', clicar);

function clicar() {
    
    let nota1 = parseFloat(document.getElementById('a').value);
    
   
    let media = nota1;
    
   (`o media é ${media}`);
    if (media < 40) {
        let conferir = media;

        document.getElementById("resultado").innerHTML = "a sua media é "+ conferir + " REPROVADO";
    } else if (media >= 40 && media%5==0) {
        
              
          
        document.getElementById("resultado").innerHTML = "sua media foi  = " + Math.floor( media ) +"  aprovado";
        
        
    }

}




