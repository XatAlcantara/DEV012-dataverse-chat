
import { navigateTo } from "../router.js";

export const Header = () => {

    const header = document.createElement("Header");

    header.id = "header"; // Cambiado de class a id
    header.innerHTML = `
        <img src="./images/LOGOS-1_1200x1200-PhotoRoom.png" id="logo" class="logo"> <!-- Cambiado de class a id -->
        <h1 id="title" class="title">F1'Verse</h1> <!-- Cambiado de class a id -->
        <i id="house-icon" class="fa-solid fa-house"></i> <!-- Cambiado de class a id -->
    `;

    const logo = header.querySelector('#logo'); // Cambiado de class a id
    logo.addEventListener("click", function () {
        const returnHome = `/`;
        navigateTo(returnHome);
    });

    return header;
}

export default Header;