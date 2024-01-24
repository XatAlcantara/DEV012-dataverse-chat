import { navigateTo } from "../router.js";

const Pilotos = (dataPiloto) => {
  const li = document.createElement("li");
  li.classList.add("list");
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "PilotsF1");
  li.setAttribute("data-id", dataPiloto.id);

  li.addEventListener("click", () => redirectToDetailView(dataPiloto));

  li.innerHTML = `
        <dl class="root-list" itemscope itemtype="PilotsF1">
          <img src="${dataPiloto.imageUrl}" itemprop="image" />
          <dt></dt><dd itemprop="name">${dataPiloto.name}</dd>
          <dt></dt><dd itemprop="placeOfBirth">${dataPiloto.facts.placeOfBirth}</dd>
          <dt></dt><dd itemprop="lastTeam">${dataPiloto.facts.lastTeam}</dd>
          <dt></dt><dd itemprop="championshipsWon">Podiums: ${dataPiloto.extraInfo.podiums}</dd>
        </dl>
      `;
  return li;
};

//const containerRoot = document.querySelector("#root");

// Función para redirigir a la vista
const redirectToDetailView = (dataPiloto) => {
  // URL a la que será redireccionado utilizando id unico
  const detailViewUrl = `/piloto`;
  // Redirigir a la vista
  navigateTo(detailViewUrl, dataPiloto); // Utilizamos la función navigateTo del router
};

export default Pilotos;
