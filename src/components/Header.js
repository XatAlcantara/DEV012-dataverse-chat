
import { navigateTo } from "../router.js";

export const header = () => {

  const header = document.createElement('header');

  const icono1 = document.createElement('i');
  icono1.setAttribute('id', 'header');
  icono1.classList.add('fas', 'fa-house'); // Cambiado a tu clase de Font Awesome para la casa
  
  const imagen1 = document.createElement('img');
  imagen1.setAttribute('src', 'src/images/LOGOS-1_1200x1200-PhotoRoom.png'); // Reemplaza con la ruta de tu imagen
  imagen1.setAttribute('alt', 'Logo formula 1'); // Puedes agregar un texto alternativo para accesibilidad

  icono1.addEventListener('click', function () {
    navigateTo('/');
  });
  
  header.appendChild(icono1);
  header.appendChild(imagen1);
  
  return header;
};