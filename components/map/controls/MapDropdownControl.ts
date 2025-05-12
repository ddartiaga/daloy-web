import clsx from "clsx";
import { IControl, Map } from "maplibre-gl";

type MapDropdownControlProps = {
  container: MapDropdownControlContainerType;
  btn: MapDropdownControlButtonType;
  items: HTMLLIElement[];
};

type MapDropdownControlContainerType = {
  className: string;
  description?: string;
};

type MapDropdownControlButtonType = {
  id: string;
  className?: string;
  innerHTML?: string;
};

class MapDropdownControl implements IControl {
  _map: Map | undefined;

  _options: MapDropdownControlProps;
  _container: HTMLDivElement | undefined;

  constructor(options: MapDropdownControlProps) {
    this._options = options;
  }

  onAdd(map: Map) {
    this._map = map;

    const containerOpts = this._options.container;

    this._container = document.createElement("div");
    this._container.className = clsx("dropdown", containerOpts?.className);

    const btnOptions = this._options.btn;
    const btn: HTMLButtonElement = document.createElement("button");
    btn.id = btnOptions.id;
    btn.type = "button";
    btn.className = btnOptions.className ?? "";
    btn.ariaExpanded = "false";
    btn.setAttribute("data-bs-toggle", "dropdown");
    btn.innerHTML = btnOptions.innerHTML ?? "";

    const ul: HTMLUListElement = document.createElement("ul");
    ul.className = "dropdown-menu";
    ul.setAttribute("aria-labelledby", btn.id);

    const children = this._options.items;

    children.map((child) => {
      ul.appendChild(child);
    });

    this._container.appendChild(btn);
    this._container.appendChild(ul);

    return this._container;
  }

  onRemove() {
    this._container?.remove();
    this._map = undefined;
  }
}

export { MapDropdownControl };
