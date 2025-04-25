import { IControl, Map } from "maplibre-gl";
import clsx from "clsx";

type MapButtonGroupControlProps = {
  className?: string;
  children: HTMLButtonElement[];
};

class MapButtonGroupControl implements IControl {
  _options: MapButtonGroupControlProps;
  _map: Map | undefined;
  _container: HTMLDivElement | undefined;

  constructor(options: MapButtonGroupControlProps) {
    this._options = options;
  }

  onAdd(map: Map): HTMLElement {
    this._map = map;

    this._container = document.createElement("div");
    this._container.className = clsx(
      "maplibregl-ctrl-group maplibregl-ctrl",
      this._options.className
    );

    this._options.children.map((child) => {
      this._container?.appendChild(child);
    });

    return this._container;
  }

  onRemove(): void {
    this._container?.remove();
    this._map = undefined;
  }
}

export { MapButtonGroupControl };
