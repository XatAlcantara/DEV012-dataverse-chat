// Filtrar datos según una propiedad y un valor específicos
export const filterData = (data, filterBy, value) => {
  const result = data.filter((item) => item.facts[filterBy] === value);
  return result;
};

// Ordenar datos de manera ascendente o descendente
export const sortData = (data, sortBy, sortOrder) => {
  // Determinar el factor de orden (ascendente: 1, descendente: -1)
  const orderFactor = sortOrder === "asc" ? 1 : -1;

  // Utilizar el método sort() para ordenar los datos según el campo especificado (sortBy)
  data.sort((a, b) => {
    const itemA = a[sortBy].toLowerCase(); // Convertir a minúsculas para una comparación insensible a mayúsculas
    const itemB = b[sortBy].toLowerCase();

    return (itemA < itemB ? -1 : (itemA > itemB ? 1 : 0)) * orderFactor;
  });

  return data;
};

// Calcular estadísticas, en este caso, promedio de podios
export const computeStats = (data) => {
  // Extraer la cantidad de podios de cada elemento y calcular el promedio
  const podiums = data.map((item) => item.extraInfo.podiums || 0);
  const totalPodiums = podiums.reduce((acc, podium) => acc + podium, 0);
  const averagePodiums = totalPodiums / data.length;
  const roundedAveragePodiums = averagePodiums.toFixed(2); // Redondear el promedio a dos decimales
  return Number(roundedAveragePodiums);
};