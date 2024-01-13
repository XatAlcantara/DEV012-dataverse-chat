// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//Importar las diferentes carpetas y funciones que tenemos en Views 
import {Home} from './views/HomeLayout.js';
import {ApyKey} from './views/ApyKey.js';
import {Error404} from './views/Error404.js';
import {Piloto} from './views/Piloto.js';

//Importar las funciones que tenemos ene l router.js
import { setRootElement, setRoutes, onURLChange } from "./router.js";

//Debemos definir las vistas asociadas a cada carpeta que mencionamos en views 
const routes = {
  "/": Home,
 "/Error404": Error404,
  "/apykey": ApyKey,
  "/piloto": Piloto,
};

const viewContainer = document.getElementById("root");

setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location.pathname);
});
