import React from "react";
import {
  GiAnimalSkull,
  GiBeastEye,
  GiDragonOrb,
  GiGiftOfKnowledge,
  GiMagicPortal,
  GiSandsOfTime,
  GiTribalGear,
  GiTribalMask,
  GiTribalPendant,
  GiTribalShield,
  GiWaxTablet,
} from "react-icons/gi";
import { TbTimelineEvent } from "react-icons/tb";
import { Link, useLocation } from "react-router";

const itemsSidebar = [
  { name: "Timeline", path: "/timeline", icon: <GiSandsOfTime size={16} /> },
  { name: "Lore", path: "/lore", icon: <GiWaxTablet size={16} /> },
  {
    name: "Characters",
    path: "/characters",
    icon: <GiTribalMask size={16} />,
  },
  { name: "Places", path: "/places", icon: <GiMagicPortal size={16} /> },
  { name: "Ars", path: "/techniques", icon: <GiTribalPendant size={16} /> },
  { name: "Weapons", path: "/weapons", icon: <GiTribalGear size={16} /> },
  { name: "Creatures", path: "/creatures", icon: <GiAnimalSkull size={16} /> },
  { name: "Factions", path: "/factions", icon: <GiTribalShield size={16} /> },
  {
    name: "Glossary",
    path: "/glossary",
    icon: <GiGiftOfKnowledge size={16} />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="md:border-r-2 md:border-border md:pr-6 border-b-2 md:border-b-0 border-border pb-6 md:pb-0">
      <div className="">
        <h2 className="font-title text-base tracking-wide uppercase mb-4 pb-2 border-b-2 border-border">
          Categories
        </h2>

        <ul className="space-y-1 text-[15px]">
          {itemsSidebar.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <li key={item.name} className="py-2 border-b border-border/30">
                <Link
                  to={item.path}
                  className="block hover:underline cursor-pointer"
                >
                  <div
                    className={`flex flex-wrap items-center gap-2 ${
                      isActive ? "font-bold text-ink" : "text-ink"
                    }`}
                  >
                    {item.icon} {item.name}
                    <span className="ml-auto">
                      {isActive ? (
                        <GiBeastEye size={16} />
                      ) : (
                        <GiDragonOrb size={16} className="opacity-50" />
                      )}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
