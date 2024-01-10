import { navigateTo } from "../router.js";
import Buttons from "./Botones.js";

const BtnHome = () => {
    const aside = document.createElement('header');
    aside.id = "aside"; // Cambiado de class a id
    aside.innerHTML = `
        <img src="src/images/LOGOS-1_1200x1200-PhotoRoom.png" alt="Logo F1" id="logoInicio"> <!-- Cambiado de class a id -->
    `;

    // Llamamos a Buttons pasando nav como parámetro
    const buttons = Buttons(aside);
    aside.appendChild(buttons); // Agregamos los botones al elemento nav

    const logoAside = aside.querySelector('#logoInicio'); // Cambiado de class a id
    logoAside.addEventListener("click", function() {
        const home = `/`;
        navigateTo(home);
    });

    return aside;
}

export default BtnHome;