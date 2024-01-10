import data from '../data/dataset.js';
import Piloto from '../components/Pilotos.js';
import Header from '../components/Header.js';
import Estadisticas from '../components/Estadisticas.js';
import Footer from '../components/Footer.js';
import Menu from '../components/Menu.js';
import { sortData, filterData, computeStats } from '../lib/dataFunctions.js';

export const HomeLayout = () => {
    const container = document.createElement('div');
    container.classList.add("container");

    const ul = document.createElement("ul");

      // Función para renderizar tarjetas
      const renderPilotos = (drivers) => {
        ul.innerHTML = '';
        drivers.forEach((driver) => {
            ul.appendChild(Piloto(driver));
        });
    };

    // Inicializar con todos los datos
    let currentData = [...data];
    renderPilotos(currentData);

    container.append(Header(), Menu(), Estadisticas(), ul, Footer());

    // Ordenar
    const ordenar = container.querySelector('#sort-order');
    ordenar.addEventListener('change', (e) => {
        const dataOrdenada = sortData(currentData, 'name', e.target.value);
        renderPilotos(dataOrdenada);
        updateStats(dataOrdenada);
    });

    // Filtrar
    const filtro = container.querySelector('#select-filter');
    filtro.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "Todos") {
            currentData = [...data];
        } else {
            currentData = filterData(data, "lastTeam", selectedValue);
        }
        const dataOrdenada = sortData(currentData, ordenar.value);
        renderPilotos(dataOrdenada);
        updateStats(dataOrdenada);
    });

       // Función para actualizar estadísticas
       const updateStats = (drivers) => {
        // Calcula el promedio de podiums utilizando la función computeStats
        const averagePodiumsElement = document.getElementById("averagePodiums");
        
        if (averagePodiumsElement) {
            const averagePodiums = computeStats(drivers);
            averagePodiumsElement.textContent = averagePodiums;
        }
    };
    
    // Borrar
    const clearButton = container.querySelector('[data-testid="button-clear"]');
    clearButton.addEventListener('click', () => {
        filtro.value = "Todos";
        currentData = [...data];
        renderCards(currentData);
        updateStats(currentData);
    });

    return container;
};