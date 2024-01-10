import { navigateTo } from "../router.js";

const Buttons = (aside) => {
  const ButtonsMenu = document.createElement('div');
  ButtonsMenu.classList.add("elementAside");
  ButtonsMenu.innerHTML = `
  <button class="apikeyButton" name="returnApikey">Api Key</button>
  `;

  const apikeyButton = ButtonsMenu.querySelector('.apikeyButton'); 
  apikeyButton.addEventListener("click", function() {
      const apikeyPage = '/apikey'; 
      navigateTo(apikeyPage); 
  });

  return ButtonsMenu;
};

export default Buttons;