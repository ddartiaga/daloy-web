import { createDropdownElementWithAnchor } from "./lib";
import { MapDropdownControl } from "./MapDropdownControl";

const NewButtonControl = () => {
  return new MapDropdownControl({
    container: {
      className:
        "maplibregl-ctrl maplibregl-ctrl-group btn-group dropstart my-2",
      description: "New",
    },
    btn: {
      id: "new-btn",
      className: "dropdown-toggle no-dd-arrow",
      innerHTML:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM11 10H8V12H11V15H13V12H16V10H13V7H11V10Z"></path></svg>',
    },
    items: [
      createDropdownElementWithAnchor({
        anchor: {
          href: "#account-offcanvas",
          role: "button",
          class: "dropdown-item",
          "data-bs-toggle": "offcanvas",
          "aria-controls": "account-offcanvas",
          innerHTML: "Account",
        },
      }),
    ],
  });
};

export { NewButtonControl };
