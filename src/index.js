import "./css/style.css";
import "./css/normalize.css";
import "material-icons/iconfont/round.css";
import logo from "./imgs/drop-down-logo.png";
import footer from "./footerContent";

// buildHeaderContent
(() => {
  const logoImg = document.createElement("img");
  logoImg.src = logo;
  logoImg.alt = "Logo that reads Phony";
  const header = document.querySelector(".header");
  header.insertAdjacentElement("afterbegin", logoImg);
  // const logoContent = document.query
  // const headerDiv = document.createElement("header");
  // headerDiv.setAttribute("id", "header-content");
  // const viewListIcon = document.createElement("i");
  // viewListIcon.classList.add("material-icons-round");
  // viewListIcon.setAttribute("id", "header-icon");
  // viewListIcon.textContent = "view_list";
  // const header = document.createElement("h1");
  // header.innerHTML = "To Do App";
  // headerDiv.appendChild(viewListIcon);
  // headerDiv.appendChild(header);
  // document.body.appendChild(headerDiv);
})();

// buildPageContent
(() => {
  footer.buildFooter();
})();
