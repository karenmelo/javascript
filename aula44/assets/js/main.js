   //capturar o submit do formulário
   
   const form = document.querySelector('.form');  
   
    form.addEventListener('submit',  function (e) {  
        e.preventDefault();
        const peso = parseFloat(form.querySelector('#peso').value);       
        const altura = parseFloat(form.querySelector('#altura').value);
            
        if (!peso ||  !altura){
            setResultado(`Peso e/ou altura inválido(s)`, false);
            return;
        }
       
        const imc = obterIMC(peso, altura);
        const nivel = obterNivelIMC(imc);
      
        setResultado(`Seu IMC é ${imc} (${nivel})`, true);
        
});

function obterNivelIMC(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 39.9)
        return nivel[5];
    
    if (imc >= 34.9)
        return nivel[4];
         
    if(imc >=  29.9)
        return nivel[3];
    
    if(imc >= 24.9)
        return nivel[2];
   
    if (imc >=  18.5)
        return nivel[1];

    if (imc <  18.5)
        return nivel[0];

}

function obterIMC(peso, altura){
    const resultadoIMC = peso / (altura**2);
    return resultadoIMC.toFixed(2);
}

function criaParagrafo() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResultado(mensagem, isValid) { 
    const resultado = form.querySelector('#resultado');
    resultado.innerHTML = '';
    const paragrafo = criaParagrafo();
    const corFundoParagrafo = isValid ? 'paragrafo-resultado' : 'paragrafo-resultado-false';
    paragrafo.classList.add(corFundoParagrafo);
    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);
}