import "./css/style.css";
import "./css/normalize.css";
import "material-icons/iconfont/round.css";
import footer from "./footerContent";

// // buildHeaderContent
// (() => {
//   const headerDiv = document.createElement("header");
//   headerDiv.setAttribute("id", "header-content");
//   const viewListIcon = document.createElement("i");
//   viewListIcon.classList.add("material-icons-round");
//   viewListIcon.setAttribute("id", "header-icon");
//   viewListIcon.textContent = "view_list";

//   const header = document.createElement("h1");
//   header.innerHTML = "To Do App";
//   headerDiv.appendChild(viewListIcon);
//   headerDiv.appendChild(header);
//   document.body.appendChild(headerDiv);
// })();

// buildPageContent
(() => {
  footer.buildFooter();
})();
