import Header from "../components/Header.js";
import Footer from '../components/Footer.js';

export const ApyKey= () => {
const ingresApykey = document.createElement("div");
    ingresApykey.classList.add("Apykey");
    ingresApykey.innerHTML = `
    <div class="apyContainer">
      <div class="textApy">
        <p class="titleApykey">APY KEY</p>
        <p class="subtitleApykey">Ingresa aqui tu Apy Key</p>
        <textarea class="passwordApykey"></textarea/>
        <div class="buttons">
          <button class="clearButtom">Borrar</button>
          <button class="saveButtom">Guardar</button>
        </div>
      </div>
    <img id="gato" src="https://github.com/XatAlcantara/DEV012-dataverse-chat/blob/main/src/images/Gato-apykey.png?raw=true class="secret"/>
    </div>`;
  
const titleApykey = ingresApykey.querySelector(".apyContainer");
ingresApykey.insertBefore(Header(),titleApykey);
titleApykey.insertAdjacentElement("afterend", Footer());

const clearButton = ingresApykey.querySelector('.clearButtom');
const ApyKeyInput = ingresApykey.querySelector('.passwordApykey');
clearButton.addEventListener("click", function() {
  ApyKeyInput.value = '';
});
   document.body.appendChild(ingresApykey); 

    const saveButtom = document.querySelector('.saveButtom');
    const ApyKey = document.querySelector('.passwordApykey');
    saveButtom.addEventListener("click", function() {
      const valorApyKey = ApyKey.value;
      localStorage.setItem("ApyKey", valorApyKey)
      alert("Se guardo el ApyKey")
    });
    
  
    return ingresApykey;
  }
