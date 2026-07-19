import {
  BrainIcon,
  BriefcaseIcon,
  FlagIcon,
  GlobeIcon,
  HammerIcon,
  type Icon,
} from "@phosphor-icons/react";
import Tooltip from "../reusables/tooltip";
import { sectionPositions } from "../../constants/sections";

interface NavigationComponent {
  icon: Icon;
  x: number;
  y: number;
}
const navigationComponents: NavigationComponent[] = [
  { icon: FlagIcon, x: sectionPositions.start.x, y: sectionPositions.start.y },
  {
    icon: HammerIcon,
    x: sectionPositions.projects.x,
    y: sectionPositions.projects.y,
  },
  {
    icon: BrainIcon,
    x: sectionPositions.skills.x,
    y: sectionPositions.skills.y,
  },
  {
    icon: BriefcaseIcon,
    x: sectionPositions.experience.x,
    y: sectionPositions.experience.y,
  },
  {
    icon: GlobeIcon,
    x: sectionPositions.travels.x,
    y: sectionPositions.travels.y,
  },
];

interface Props {
  panTo: (x: number, y: number, duration?: number) => void;
}
export default function Navigation({ panTo }: Props) {
  return (
    <nav className="absolute z-50 bottom-8 left-1/2 -translate-x-1/2 bg-gray-200 text-white p-2 rounded-lg shadow-md border-gray-300 border">
      <ul className="font-bold flex gap-2">
        {navigationComponents.map((component, index) => {
          const styles =
            "hover:bg-black/15 p-2 text-gray-500 rounded-md transition-colors";
          const iconSize = 20;
          const IconComponent = component.icon;

          if (![FlagIcon, HammerIcon].includes(component.icon)) {
            return (
              <Tooltip key={index} label="WIP">
                <li key={index} className={styles}>
                  <IconComponent size={iconSize} weight="regular" />
                </li>
              </Tooltip>
            );
          } else {
            return (
              <li
                key={index}
                className={styles}
                onClick={() => {
                  // for the projects section, shift slightly down.
                  if (component.icon === HammerIcon) {
                    panTo(component.x, component.y + 250);
                    return;
                  }

                  panTo(component.x, component.y);
                }}
              >
                <IconComponent size={iconSize} weight="regular" />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
