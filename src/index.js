import "./css/normalize.css";
import "material-icons/iconfont/round.css";
import "./css/style.css";
import footer from "./footerContent";

// create header content
const headerContent = (() => {
  const toggleDropDownDisplay = (id) => {
    const dropDown = document.querySelector(`[data-id="${id}"]`);
    // console.log(dropDown);
    dropDown.classList.toggle("drop-down-links-visible");
  };

  const toggleDropDownIcon = (icon) => {
    if (icon.textContent === "arrow_drop_down") {
      icon.textContent = "arrow_drop_up";
    } else {
      icon.textContent = "arrow_drop_down";
    }
  };

  return {
    toggleDropDownDisplay,
    toggleDropDownIcon,
  };
})();

const events = (() => {
  const addHeaderLinkEvents = () => {
    const headerLinks = document.querySelectorAll(".header-link");
    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const dropIcon = link.nextElementSibling;
        headerContent.toggleDropDownDisplay(link.getAttribute("id"));
        headerContent.toggleDropDownIcon(dropIcon);
      });
    });
  };

  return {
    addHeaderLinkEvents,
  };
})();

// buildHeaderContent
(() => {
  events.addHeaderLinkEvents();
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
