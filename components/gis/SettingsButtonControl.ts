import { MapButtonControl } from "./controls/MapButtonControl";
import { MapButtonGroupControl } from "./controls/MapButtonGroupControl";

type ButtonElementProps = {
  title: string;
  className?: string;
  innerHTML: string;
  onClick: () => void;
};

const createButtonElement = (options: ButtonElementProps) => {
  const btn = document.createElement("button");
  btn.title = options.title;
  btn.className = options.className ?? "";
  btn.innerHTML = options.innerHTML;
  btn.onclick = options.onClick;

  return btn;
};

const SettingsControl = () => {
  // To style like the default style in the map, use button group
  return new MapButtonGroupControl({
    children: [
      createButtonElement({
        title: "Button1",
        innerHTML: '<i class="ri-more-fill"></i>',
        onClick() {
          console.log("Button 1");
        },
      }),
    ],
  });
};

export { SettingsControl };
