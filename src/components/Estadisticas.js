const Estadisticas = () => {

  const SectionEstadisticas = document.createElement("div");
  SectionEstadisticas.classList.add("computeStats");

  const estadistica = document.createElement("p");
  estadistica.textContent = 'Promedio Podios Obtenidos: ';
  
  // Usa un elemento span para mostrar el promedio de podios
  let spanStats = document.createElement("span");
  spanStats.id = "averagePodiums"; // Cambiado a id en lugar de atributo
  spanStats.textContent = '--';
  
  estadistica.appendChild(spanStats);
  SectionEstadisticas.appendChild(estadistica);
  
  return SectionEstadisticas;
}

export default Estadisticas;