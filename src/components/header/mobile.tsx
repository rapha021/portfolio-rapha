import {
  BsFillBoxSeamFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";

import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

import { BiCodeAlt, BiSolidUserVoice } from "react-icons/bi";

import { twMerge } from "tailwind-merge";
import { useTheme } from "../../contexts/ThemeContext";

interface IMobileMenu {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: IMobileMenu) => {
  const { isDark, toggleCurrentTheme } = useTheme();

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
          <a
            href="#home"
            className="h-fit flex items-center justify-start gap-3 text-xl"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <AiFillHome size="24px" />
            <button>Home</button>
          </a>

          <hr />

          <a
            href="#home"
            className="h-fit flex items-center justify-start gap-3 text-xl"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <AiFillInfoCircle size="24px" />
            <button>About</button>
          </a>

          <hr />

          <a
            href="#stacks"
            className="h-fit flex items-center justify-start gap-3 text-xl"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <BiCodeAlt size="24px" />
            <button>Stacks</button>
          </a>

          <hr />

          <a
            href="#projects"
            className="h-fit flex items-center justify-start gap-3 text-xl"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <BsFillBoxSeamFill size="24px" />
            <button>Projects</button>
          </a>

          <hr />

          <a
            href="#contact"
            className="h-fit flex items-center justify-start gap-3 text-xl"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <BiSolidUserVoice size="24px" />
            <button>Contact</button>
          </a>

          <hr />

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
