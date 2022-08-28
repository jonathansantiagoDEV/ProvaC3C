//triangulo

const lad1 = document.querySelector("#lado1");
const lad2 = document.querySelector("#lado2");
const lad3 = document.querySelector("#lado3");
const tri = document.querySelector("#triangulo");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const con = document.querySelector("#conf");


//validação para que o usuário se atente ao campo vazio
function validacao() {

  if (lad1.value == "" && lad1.value !== 0) {
    l1.style = "color: #aa0044";
    lad1.style = "border-color: #FF3333";
  } else {
    l1.style = "color: #000000";
    lad1.style = "border-color: #36FF33";

  }
  if (lad1.value == "") {
    l2.style = "color: #aa0044";
    lad2.style = "border-color: #FF3333";
  } else {
    l2.style = "color: #000000";
    lad2.style = "border-color: #36FF33";
  }
  if (lad2.value == "") {
    l3.style = "color: #aa0044";
    lad3.style = "border-color: #FF3333";
  } else {
    l3.style = "color:  #000000";
    lad3.style = "border-color: #36FF33";

  }

  //mostrar o usuario que foi prenchido em verde e não prenchido em vern
  con.onclick = () => {
    if (lad1.value == "") {
      lad1.focus();
    } else if (lad2.value == "") {
      lad2.focus();
    } else if (lad3.value == "") {
      lad3.focus();
    }
    else{
      // equilátero
     if(lad1.value == lad2.value && lad2.value ==lad3.value ){
      tri.value = "Equilátero";
      //isoceles
      }else if(lad1.value == lad2.value || lad1.value == lad3.value || lad3.value ==lad2.value){
          tri.value ="Isósceles";
        //escaleno
        }else{
          tri.value = "Escaleno";
        }
          
      }
    }
  }



