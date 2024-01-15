import { navigateTo } from "../router.js"; 

export const ApyKey= () => {
    const ingresApykey = document.createElement("div");
    ingresApykey.classList.add("Apykey");
    ingresApykey.innerHTML = `
    <h1 class="titleApykey">APY KEY</h1>
    <h2 class="subtitleApykey">Ingresa aqui tu Apy Key</h2>
    <textarea class="passwordApykey"/>
    <img src="https://github.com/XatAlcantara/DEV012-dataverse-chat/blob/main/src/images/Gato-apykey.png?raw=true class="secret">
    
    <button class="saveButtom">Guardar</button>
    <button class="clearButtom">Borrar</button>
    `;
  
   const errorReturn = ErrorText.querySelector('.errorButton');
    errorReturn.addEventListener("click", function() {
      const returnHome = `/`; 
      navigateTo(returnHome); 
    });
  
    return ingresApykey;
  }

  export default ApyKey;