import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com', '.net', '.es'];

  let lista = document.getElementById('lista-dominios');

  let resultados = [];

  pronoun.forEach((pronombre) => {
    adj.forEach((adjetivo) => {
      noun.forEach((sujeto) => {
        domain.forEach((dominio) => {
          resultados.push(`${pronombre}${adjetivo}${sujeto}${dominio}`);
        });
      });
    });
  });

  lista.innerHTML = resultados.map(item => `<li>${item}</li>`).join('');
};
