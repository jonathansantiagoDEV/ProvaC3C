//let bt = document.querySelector("#bt");
//let tres = document.querySelector("#tres");
//let res = document.querySelector("#res");

bt.addEventListener('click', clicar);

function clicar() {
    const but = document.getElementById("cli");
    const res = document.getElementById("resultado")
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    let delta = Math.pow(b, 2) - 4 * a * c;

    alert(`o delta é ${delta}`);
    if (delta > 0) {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "x1 = " + raiz1 + "<br>" + "x2 = " + raiz2;
    } else if (delta === 0) {
        let raizUnica = (-b + Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "Raiz única = " + raizUnica;
    } else if (delta < 0) {
        document.getElementById("resultado").innerHTML = "Delta < 0, não existem raízes no conjunto dos números reais.";
    }




}
