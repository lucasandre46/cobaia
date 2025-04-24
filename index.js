function soma(){
    let valor1 = document.getElementById('valor1').value;
     let valor2 = document.getElementById('valor2').value;
    let soma = valor1 + valor2;
    document.getElementById('resultado').innerHTML = soma
  }
  
  function subtrair(){
    let valor1 = document.getElementById('valor1').value;
     let valor2 = document.getElementById('valor2').value;
    let subtrair = valor1 - valor2;
    document.getElementById('resultado').innerHTML = subtrair
  }
  
  function multi(){
    let valor1 = document.getElementById('valor1').value;
     let valor2 = document.getElementById('valor2').value;
    let multiplicar = valor1 * valor2;
    document.getElementById('resultado').innerHTML = multiplicar
  }
  
  function dividir(){
    let valor1 = document.getElementById('valor1').value;
     let valor2 = document.getElementById('valor2').value;
    let dividir = valor1 / valor2;
    document.getElementById('resultado').innerHTML = dividir
  }