
import { MapDropdownControl } from "./controls/MapDropdownControl";

type LinkElementProps = {
  link: {
    onClick?: () => void;
  };
  child?: {
    href?: string;
    className: string;
    innerHTML: string;
  };
};

const createLinkElement = (props: LinkElementProps) => {
  const li: HTMLLIElement = document.createElement("li");

  if (props.link.onClick) li.onclick = props.link.onClick;

  if (props.child) {
    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.href = props.child.href ?? "javascript:void(0);";
    anchor.className = props.child.className;
    anchor.innerHTML = props.child.innerHTML;

    li.appendChild(anchor);
  } else {
    // assume that it is a separator
    const sep: HTMLHRElement = document.createElement("hr");
    sep.className = "dropdown-divider";

    li.appendChild(sep);
  }

  return li;
};

const MoreOptionsControl = () => {
  return new MapDropdownControl({
    container: {
      className: "maplibregl-ctrl maplibregl-ctrl-group",
    },
    btn: {
      id: "more-options",
      innerHTML: '<i class="ri-more-fill"></i>',
    },
    items: [
      createLinkElement({
        link: {
          onClick: () => {
            console.log("hello");
          },
        },
        child: {
          className: "dropdown-item",
          innerHTML: "Import",
        },
      }),
    ],
  });
};

const MoreOptionsFancyControl = () => {
  return new MapDropdownControl({
    container: {
      className: "maplibregl-ctrl btn-group",
    },
    btn: {
      id: "more-options-fancy",
      className: "btn btn-primary shadow-lg btn-wave dropdown-toggle",
      innerHTML: "More Options ",
    },
    items: [
      createLinkElement({
        link: {
          onClick: () => {
            console.log("hello");
          },
        },
        child: {
          className: "dropdown-item",
          innerHTML: "Import",
        },
      }),
      createLinkElement({
        link: {
          onClick: () => {
            console.log("hello");
          },
        },
        child: {
          className: "dropdown-item",
          innerHTML: "Import",
        },
      }),
      createLinkElement({
        link: {},
      }),
      createLinkElement({
        link: {
          onClick: () => {
            console.log("hello");
          },
        },
        child: {
          className: "dropdown-item",
          innerHTML: "Import",
        },
      }),
    ],
  });
};

export { MoreOptionsControl, MoreOptionsFancyControl };
