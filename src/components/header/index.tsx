import { FaGithub, FaLinkedin, FaFilePdf, FaMoon } from "react-icons/fa6";
import {
  BsFillBoxSeamFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BiCodeAlt, BiSolidUserVoice } from "react-icons/bi";
import { useTheme } from "../../contexts/ThemeContext";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleCurrentTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-10 flex justify-center w-full h-16 pl-6 pr-6 backdrop-blur-2xl xl:pr-24 xl:pl-24 bg-gray-500/10 dark:bg-purple-950/20">
        <div
          id="container"
          className="w-[1280px] h-full flex items-center justify-between gap-4"
        >
          Logo aqui
          <section className="hidden gap-4 md:flex">
            <div className="w-fit h-full flex gap-4 justify-end items-center font-['DM Sans'] font-dm-sans">
              <a href="#home">
                <button className="w-20 h-8 duration-200 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white dark:text-gray-100 dark:hover:bg-slate-500">
                  Home
                </button>
              </a>

              <a href="#about">
                <button className="w-20 h-8 duration-200 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white dark:text-gray-100 dark:hover:bg-slate-500 ">
                  About
                </button>
              </a>

              <a href="#stacks">
                <button className="w-20 h-8 duration-200 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white dark:text-gray-100 dark:hover:bg-slate-500 ">
                  Techs
                </button>
              </a>

              <button className="w-20 h-8 duration-200 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white dark:text-gray-100 dark:hover:bg-slate-500 ">
                Projects
              </button>

              <button className="w-20 h-8 duration-200 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white dark:text-gray-100 dark:hover:bg-slate-500 ">
                Contact
              </button>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/rapha021" target="_blank">
                <FaGithub
                  size="30px"
                  className="duration-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/raphaelgloria/"
                target="_blank"
              >
                <FaLinkedin
                  size="30px"
                  className="duration-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300"
                />
              </a>

              <a href="#">
                <FaFilePdf
                  size="30px"
                  className="duration-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300"
                />
              </a>
              <button onClick={() => toggleCurrentTheme(!isDark)}>
                {isDark ? (
                  <BsFillSunFill
                    size="30px"
                    className="duration-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300"
                  />
                ) : (
                  <FaMoon
                    size="30px"
                    className="duration-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300"
                  />
                )}
              </button>
            </div>
          </section>
          {/* mobile menu */}
          <section
            className="flex md:hidden"
            onClick={() => setIsOpen((state) => !state)}
          >
            {isOpen ? (
              <AiOutlineClose size="26" className="dark:text-gray-50" />
            ) : (
              <AiOutlineMenu size="26" className="dark:text-gray-50" />
            )}
          </section>
        </div>
      </header>

      <section
        className={twMerge(
          "fixed w-full h-96 left-0 top-16 py-12 px-12 flex flex-col justify-between dark:bg-purple-950/20 bg-gray-500/10 rounded-b-xl z-50 backdrop-blur-2xl dark:backdrop-blur-xl font-dm-sans",
          isOpen ? "flex" : "hidden"
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
      </section>
    </>
  );
};

export default Header;
