const pantalla = document.querySelector('.pantalla');
const buttons = document.querySelectorAll('.cal-button');
let pantallaContenido = '0';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const valorBoton = button.textContent.trim();

        if (valorBoton === 'C') {
            pantallaContenido = '0';
        } else if (valorBoton === '\u2190') { 
            pantallaContenido = pantallaContenido.slice(0, -1);
            if (pantallaContenido === '') {
                pantallaContenido = '0';
            }
        } else if (valorBoton === '=') {
            try {
                pantallaContenido = eval(pantallaContenido);
            } catch (error) {
                pantallaContenido = 'Error';
            }
        } else {
            if (pantallaContenido === '0' || pantallaContenido === 'Error') {
                pantallaContenido = valorBoton;
            } else {
                pantallaContenido += valorBoton;
            }
        }


        pantalla.textContent = pantallaContenido;
    });
});