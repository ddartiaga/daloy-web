type LinkElementProps = {
  link?: {
    onClick?: () => void;
  };
  anchor?: {
    innerHTML: string;
    [key: string]: string;
  };
};

const createDropdownElementWithAnchor = ({
  link,
  anchor,
}: LinkElementProps) => {
  const li: HTMLLIElement = document.createElement("li");

  if (link) {
    if (link.onClick) {
      li.onclick = link.onClick;
    }
  }

  if (anchor) {
    const { innerHTML, href, ...rest } = anchor;

    const a: HTMLAnchorElement = document.createElement("a");
    a.href = href ?? "javascript:void(0);";
    a.innerHTML = innerHTML;

    // Spread additional properties onto the element:
    Object.entries(rest).forEach(([key, value]) => {
      a.setAttribute(key, value);
    });

    li.appendChild(a);
  } else {
    const sep: HTMLHRElement = document.createElement("hr");
    sep.className = "dropdown-divider";

    li.appendChild(sep);
  }

  return li;
};

export { createDropdownElementWithAnchor };
