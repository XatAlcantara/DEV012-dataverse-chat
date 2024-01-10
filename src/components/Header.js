
import { navigateTo } from "../router.js";

export const Header = () => {

      const header = document.createElement("Header");
    
      header.classList.add("Header");
      header.innerHTML = `
          <img src="./images/LOGOS-1_1200x1200-PhotoRoom.png class="logo">
          <h1 class="title">F1'Verse</h1>
          <i class="fa-solid fa-house"></i>
      `;
  
      const logo = header.querySelector('.logo');
      logo.addEventListener("click", function() {
          const pageInit = `/`; 
          navigateTo(pageInit); 
      });
  
      return header;
  } 
  
  export default Header;