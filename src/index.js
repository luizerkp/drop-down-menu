import "./css/normalize.css";
import "material-icons/iconfont/round.css";
import "material-icons/iconfont/outlined.css";
import "./css/style.css";
import footer from "./footerContent";

// // create header content
// const headerContent = (() => {
//   const toggleDropDownDisplay = (id) => {
//     const dropDown = document.querySelector(`[data-id="${id}"]`);
//     // console.log(dropDown);
//     dropDown.classList.toggle("drop-down-links-visible");
//   };

//   const toggleDropDownIcon = (icon) => {
//     if (icon.textContent === "arrow_drop_down") {
//       icon.textContent = "arrow_drop_up";
//     } else {
//       icon.textContent = "arrow_drop_down";
//     }
//   };

//   return {
//     toggleDropDownDisplay,
//     toggleDropDownIcon,
//   };
// })();

const events = (() => {
  const addModalDropMenuEvent = () => {
    const headerTopLinks = document.querySelectorAll(".header-top-links");
    headerTopLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        e.target.querySelector(".modal-menu").classList.add("modal-menu-active");
        e.target.classList.add("arrow-active");
      });
      link.addEventListener("mouseleave", (e) => {
        e.target.querySelector(".modal-menu").classList.remove("modal-menu-active");
        e.target.classList.remove("arrow-active");
      });
    });
  };

  return {
    addModalDropMenuEvent,
  };
})();

// buildHeaderContent
(() => {
  events.addModalDropMenuEvent();
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
