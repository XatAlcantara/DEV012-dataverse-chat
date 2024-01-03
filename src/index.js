// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import PanelLayout from "./views/PanelLayout.js";
/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": PanelLayout,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import HomeLayout from "./views/HomeLayout.js";
import { setRootElement, setRoutes, onURLChange } from "./router.js";
//import { Error404 } from "./views/Error404.js";
//import { description } from "./views/Description.js";
//import { chatView } from "./views/Chat.js";
//import { valorInput } from "./views/apikey.js";

const routes = {
  "/": HomeLayout,
 // "/Error404": Error404,
  //"/description": description,
  //"/panel": chatView,
  //"/apikey": valorInput,
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

document.getElementById('root').append(HomeLayout())
// document.getElementById('root').append(PanelLayout())