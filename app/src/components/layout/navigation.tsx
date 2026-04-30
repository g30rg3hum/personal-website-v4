import {
  BrainIcon,
  BriefcaseIcon,
  FlagIcon,
  GlobeIcon,
  HammerIcon,
  type Icon,
} from "@phosphor-icons/react";
import Tooltip from "../reusables/tooltip";

interface NavigationComponent {
  icon: Icon;
  x: number;
  y: number;
}
const navigationComponents: NavigationComponent[] = [
  { icon: FlagIcon, x: 0, y: 0 },
  { icon: HammerIcon, x: 0, y: 0 },
  { icon: BrainIcon, x: 0, y: 0 },
  { icon: BriefcaseIcon, x: 0, y: 0 },
  { icon: GlobeIcon, x: 0, y: 0 },
];

interface Props {
  panTo: (x: number, y: number, duration?: number) => void;
}
export default function Navigation({ panTo }: Props) {
  return (
    <nav className="absolute z-50 bottom-8 left-1/2 -translate-x-1/2 bg-black text-white p-2 rounded-lg shadow-md">
      <ul className="font-bold flex gap-2">
        {navigationComponents.map((component, index) => {
          const styles = "hover:bg-white/15 p-2 rounded-md transition-colors";
          const iconSize = 20;
          const IconComponent = component.icon;

          if (component.icon !== FlagIcon) {
            return (
              <Tooltip key={index} label="WIP">
                <li key={index} className={styles}>
                  <IconComponent size={iconSize} weight="bold" />
                </li>
              </Tooltip>
            );
          } else {
            return (
              <li
                key={index}
                className={styles}
                onClick={() => panTo(component.x, component.y)}
              >
                <IconComponent size={iconSize} weight="bold" />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
