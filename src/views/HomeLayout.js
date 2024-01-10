import Piloto from "../components/Piloto.js";
import data from "../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { div_filtros } from "../components/Menu.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";



const HomeLayout = () => {
  const container = document.createElement('span')
 //METER HEADER, FILTROS Y ESTADÍSTICAS A UN DIV
 const div_home = document.createElement("div");
 div_home.setAttribute("id", "viewHome");

 div_home.appendChild(header());
 div_home.appendChild(div_filtros());
 div_home.appendChild(p_estadisticas());

  // por aqui crear la sidebar
    const ul = document.createElement("ul");

  
    data.forEach((element) => { 
      ul.appendChild(Piloto(element));
    });

    container.append(ul) // aqui agregas la sidebar
  
    return container;
  };
  
  export default HomeLayout;
