import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export const Error404 = () => {
  const ErrorText = document.createElement("div");
  ErrorText.classList.add("ErrorText");
  ErrorText.innerHTML = `
  <div class="errorContainer">
    <div class="textContainer">
      <h1 id="tituloError" class="titleError">Error 404</h1>
      <h2 class="subtitleError">Pagina no encontrada</h2>
      <p class="textMessage"> Lo sentimos, estamos trabajando para solucionarlo </p>
    </div>
    <img id="guido" src="/images/Guido-error.png" class="reparacion">
  </div>
  `;

  const titleError = ErrorText.querySelector(".errorContainer");
  ErrorText.insertBefore(Header(), titleError);
  titleError.insertAdjacentElement("afterend", Footer());

  return ErrorText;
};

export default Error404;
