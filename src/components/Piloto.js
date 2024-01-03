const Piloto =(dataPiloto)=>{
    const li = document.createElement("li");
      li.classList.add("list"); // Rubi: Agrega la clase "list" (Confirmar porque no funciona)
      li.setAttribute("itemscope", "");
      li.setAttribute("itemtype", "PilotsF1");
      li.setAttribute("data-id", dataPiloto.id);
  
      li.innerHTML = `
        <dl class="root-list" itemscope itemtype="PilotsF1">
          <img src="${dataPiloto.imageUrl}" itemprop="image" />
          <dt></dt><dd itemprop="name">${dataPiloto.name}</dd>
          <dt></dt><dd itemprop="placeOfBirth">${dataPiloto.facts.placeOfBirth}</dd>
          <dt></dt><dd itemprop="lastTeam">${dataPiloto.facts.lastTeam}</dd>
          <dt></dt><dd itemprop="championshipsWon">Campeonatos: ${dataPiloto.extraInfo.championshipsWon}</dd>
        </dl>
      `;
      return li;
}

export default Piloto