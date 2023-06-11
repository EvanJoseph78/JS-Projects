let contador = 0;
const valor = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const corPadrao = valor.style.color;

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            contador--;
        }else if (styles.contains('increase')){
            contador++;
        }else {
            contador = 0;
        }

        if (contador < 0) {
            valor.style.color = 'red';    
        }
        else if (contador > 0) {
            valor.style.color = 'green';
        }else {
            valor.style.color = corPadrao;
        }
        valor.textContent = contador;
    })
})