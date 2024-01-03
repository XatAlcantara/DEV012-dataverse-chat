import dataset from "../data/dataset.js";
import { computeStats } from "../lib/dataFunctions.js";

export const computeStats = (data) => {
    // Calcula el promedio de podios
    const podiums = dataset.map((item) => item.extraInfo.podiums);
    const totalPodiums = podiums.reduce((acc, podium) => acc + podium, 0);
    const averagePodiums = totalPodiums / dataset.length;
    const roundedAveragePodiums = averagePodiums.toFixed(2); // Redondea el promedio a dos decimales
    return Number(roundedAveragePodiums);
  };