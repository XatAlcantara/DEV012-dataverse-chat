import { navigateTo } from "../router.js"; 

export const Error404 = () => {
  const ErrorText = document.createElement("div");
  ErrorText.classList.add("ErrorText");
  ErrorText.innerHTML = `
  <h1 class="titleError">Error 404</h1>
  <h2 class="subtitleError">Pagina no encontrada</h2>
  <p class="textMessage"> Lo sentimos, estamos trabajando para solucionarlo </p>
  <img src="https://github.com/XatAlcantara/DEV012-dataverse-chat/blob/main/src/images/Guido-error404.png?raw=true class="reparacion">
  
  <button class="errorButton">Volver al inicio</button>
  `;

  const errorReturn = ErrorText.querySelector('.errorButton');
  errorReturn.addEventListener("click", function() {
    const returnHome = `/`; 
    navigateTo(returnHome); 
  });

  return ErrorText;
};

export default Error404;