import {
  BsFillBoxSeamFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../contexts/ThemeContext";
import { IMenuActions } from ".";
import React, { ElementType } from "react";

interface IMobileMenu {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMenuActionsMobile extends IMenuActions {
  icon: ElementType;
}

const MobileMenu = ({ isOpen, setIsOpen }: IMobileMenu) => {
  const { isDark, toggleCurrentTheme } = useTheme();

  const MenuActions: Array<IMenuActionsMobile> = [
    { title: "About", link: "#home", icon: AiFillInfoCircle },
    { title: "Stacks", link: "#stacks", icon: BiCodeAlt },
    { title: "Projects", link: "#projects", icon: BsFillBoxSeamFill },
  ];

  return (
    <>
      <div
        className={twMerge(
          "fixed w-full h-96 left-0 top-16 py-12 px-12 dark:bg-purple-950/20 z-[9] bg-gray-500/10 rounded-b-xl backdrop-blur-2xl font-dm-sans transition-all duration-500",
          !isOpen && "h-0 top-[-250px]"
        )}
      >
        <div
          className={twMerge(
            "h-full flex flex-col justify-between transition-all duration-1000",
            isOpen ? "opacity-100" : "opacity-0 duration-200"
          )}
        >
          {MenuActions.map((button) => (
            <React.Fragment key={button.title}>
              <a
                href={button.link}
                className="h-fit flex items-center justify-start gap-3 text-xl"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <button.icon size="24px" />
                <button>{button.title}</button>
              </a>

              <hr className="h-[0.5px] rounded-xl bg-gray-700 border-none dark:bg-slate-100" />
            </React.Fragment>
          ))}

          <a
            className="h-fit flex items-center justify-start gap-3 text-xl"
            onClick={() => toggleCurrentTheme(!isDark)}
          >
            {isDark ? (
              <BsFillSunFill size="24px" />
            ) : (
              <BsFillMoonFill size="24px" />
            )}
            <button>{isDark ? "Light mode" : "Dark mode"}</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
