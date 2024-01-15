
import { navigateTo } from "../router.js";

export const Header = () => {

    const header = document.createElement("Header");

    header.id = "header"; // Cambiado de class a id
    header.innerHTML = `
        <i class="fa-solid fa-house fa-lg" style="color: #ffffff;"></i> <!-- Cambiado de class a id --> 
        <h1 id="title" class="title">F1'Verse</h1> <!-- Cambiado de class a id -->
        <img src="https://github.com/XatAlcantara/DEV012-dataverse-chat/blob/main/src/images/Logo-blanco-f1.png?raw=true" id="logo" class="logo"> <!-- Cambiado de class a id -->
        
    `;

    const logo = header.querySelector('#logo'); // Cambiado de class a id
    logo.addEventListener("click", function () {
        const returnHome = `/`;
        navigateTo(returnHome);
    });

    return header;
}

export default Header;