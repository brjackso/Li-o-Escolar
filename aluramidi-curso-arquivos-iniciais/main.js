function tocaSomPom(){
    document.querySelector('som_tecla_pom').play()}


    document.querySelector('.tecla_som').oneclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla');


// Estrutura de Repetição - Enquanto
let contador = 0;
while(contador < listaDeTeclas.length){

 listaDeTeclas[contador].oneclick = tocaSomPom;
contador = contador + 1;

console.log(contador);

}


