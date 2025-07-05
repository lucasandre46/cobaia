export function createHeader(){
    console.log('header rodando');
   const header = document.getElementById('header');

    let divBarra = document.createElement('div');
    divBarra.id = 'Barra';

    let divBtn = document.createElement('div');
    divBtn.id = 'btns'

   let btnHome = document.createElement ('button');
    btnHome.className = 'btnHeader';
    btnHome.textContent = 'Home';

    let btnBandas = document.createElement ('button');
    btnBandas.className = 'btnHeader';
    btnBandas.textContent = 'Bandas';


    header.appendChild(divBarra);
    divBarra.appendChild(divBtn);
    divBtn.appendChild(btnHome);
    divBtn.appendChild(btnBandas);

}