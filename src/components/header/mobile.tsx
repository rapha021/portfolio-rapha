import {
  BsFillBoxSeamFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BiCodeAlt, BiSolidUserVoice } from "react-icons/bi";
import { GoShare } from "react-icons/go";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../contexts/ThemeContext";
import { IMenuActions } from ".";
import { ElementType } from "react";

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
    { title: "Home", link: "#home", icon: AiFillHome },
    { title: "About", link: "#home", icon: AiFillInfoCircle },
    { title: "Stacks", link: "#stacks", icon: BiCodeAlt },
    { title: "Projects", link: "#projects", icon: BsFillBoxSeamFill },
    { title: "Contact", link: "#contact", icon: BiSolidUserVoice },
    { title: "Socials", link: "#socials", icon: GoShare },
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
            "h-full flex flex-col justify-between transition-transform duration-1000",
            isOpen ? "opacity-100" : "opacity-0 duration-200"
          )}
        >
          {MenuActions.map((button) => (
            <>
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

              <hr />
            </>
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
