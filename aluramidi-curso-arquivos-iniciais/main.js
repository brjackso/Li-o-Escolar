function tocaSomPom(){
    document.querySelector('som_tecla_pom').play()}


    document.querySelector('.tecla_som').oneclick = tocaSomPom;

 const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
 listaDeTeclas[0].oneclick = tocaSomPom;
// Estrutura de Repetição - Enquanto
