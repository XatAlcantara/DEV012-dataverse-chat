import { componentePeticion } from "../lib/Peticiones.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export const Piloto = (dataPiloto) => {
  const seccion = document.createElement("section");
  const contenedor = document.createElement("div");
  contenedor.classList.add("piloto-container");
  contenedor.setAttribute("itemscope", "");
  contenedor.setAttribute("itemtype", "PilotsF1");
  contenedor.setAttribute("data-id", dataPiloto.id);

  contenedor.innerHTML = `
    <div class="pilotoContainer" itemscope itemtype="PilotsF1">
        
        <div class="primeraInfo">
        <br>
            <span class="name">${dataPiloto.name}</span>  
                <div class="contenedor2">
                    <img id="fotoPiloto" src="${dataPiloto.imageUrl}" itemprop="image" />
                      <div class="infoPrincipal">
                            <span class="date-of-birth">Año de nacimiento: ${dataPiloto.facts.yearOfBirth}</span>
                            <span class="place-of-birth">Lugar de nacimiento: ${dataPiloto.facts.placeOfBirth}</span>
                            <span class="last-team"> Ultima escuderia: ${dataPiloto.facts.lastTeam}</span>
                            <span class="championships">Podios: ${dataPiloto.extraInfo.podiums}</span>
                            <span class="championships">Campeonatos: ${dataPiloto.extraInfo.championshipsWon}</span>
                      </div>
                </div>
            <span class="description">${dataPiloto.description}</span>   
        </div>
          
        <div class="chat-container">
            <p class=textoChat>Inicia la conversacion</p>
              <div class=contenedorMensajes>
              <article id="chat"></article>
              </div>
            <textarea id="mensajeTextarea" placeholder="Escribe tu mensaje..."></textarea>
            <button id="enviarMensajeBtn">Enviar Mensaje</button>
        </div>
    </div>
  `;

  const buttonEnviar = contenedor.querySelector("#enviarMensajeBtn");
  const mensajeUsuario = contenedor.querySelector("#mensajeTextarea");

  buttonEnviar.addEventListener("click", () => {
    componentePeticion(dataPiloto, mensajeUsuario.value)
      .then((res) => res.json())
      .then((data) => {
        const article = contenedor.querySelector("article#chat");
        const pPiloto = document.createElement("p");
        const pUser = document.createElement("p");

        pPiloto.classList.add("piloto-message");
        pUser.classList.add("user-message");

        pPiloto.textContent = data.choices[0].message.content;
        pUser.textContent = mensajeUsuario.value;
        article.append(pUser, pPiloto);
        mensajeUsuario.value = "";
      });
  });

  seccion.append(Header(), contenedor, Footer());

  return seccion;
};
