import clsx from "clsx";
import { IControl, Map } from "maplibre-gl";

type MapButtonControlProps = {
  id?: string;
  className?: string;
  title: string;
  innerHTML: string;
  onClick: () => void;
};

class MapButtonControl implements IControl {
  _map: Map | undefined;

  _element: HTMLButtonElement;
  _options: MapButtonControlProps;

  constructor(options: MapButtonControlProps) {
    this._element = document.createElement("button");
    this._options = options;
  }

  onAdd(map: Map) {
    this._map = map;

    this._element.className = clsx("maplibregl-ctrl", this._options.className);
    this._element.title = this._options.title;
    this._element.innerHTML = this._options.innerHTML;
    this._element.onclick = this._options.onClick;

    return this._element;
  }

  onRemove() {
    this._element.remove();
    this._map = undefined;
  }
}

export { MapButtonControl };
