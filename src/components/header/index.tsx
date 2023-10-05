import { FaGithub, FaLinkedin, FaMoon } from "react-icons/fa6";
import { BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "../../contexts/ThemeContext";
import { ElementType, useState } from "react";
import MobileMenu from "./mobile";

export interface IMenuActions {
  title: string;
  link: string | undefined;
}

export interface IMenuIcons {
  icon: ElementType;
  link: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleCurrentTheme } = useTheme();

  const MenuActions: Array<IMenuActions> = [
    { title: "About", link: "#home" },
    { title: "Stacks", link: "#stacks" },
    { title: "Projects", link: "#projects" },
    // { title: "Contact", link: "#contact" },
  ];

  const MenuIcons: Array<IMenuIcons> = [
    { icon: FaGithub, link: "https://github.com/rapha021" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/raphaelgloria/" },
    // { icon: FaFilePdf, link: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-10 flex justify-center w-full h-16 pl-6 pr-6 backdrop-blur-2xl xl:pr-24 xl:pl-24 bg-gray-500/10 dark:bg-purple-950/20">
        <div
          id="container"
          className="w-[1280px] h-full flex items-center justify-end gap-4"
        >
          <section className="hidden gap-4 mdPlus:flex">
            <div className="w-fit h-full flex gap-4 justify-end items-center font-['DM Sans'] font-dm-sans">
              {MenuActions.map((action) => (
                <a href={action.link} key={action.title}>
                  <button className="w-20 h-8 duration-200 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white dark:text-gray-100 dark:hover:bg-slate-500">
                    {action.title}
                  </button>
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              {MenuIcons.map((icon) => (
                <a href={icon.link} target="_blank" key={icon.link}>
                  {
                    <icon.icon
                      size="30px"
                      className="duration-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300"
                    />
                  }
                </a>
              ))}

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
          {/* mobile hamburguer menu */}
          <section
            className="flex mdPlus:hidden"
            onClick={() => setIsOpen((state) => !state)}
          >
            {isOpen ? (
              <AiOutlineClose size="26" className="dark:text-gray-50" />
            ) : (
              <AiOutlineMenu size="26" className="dark:text-gray-50" />
            )}
          </section>
          {/* mobile hamburguer menu */}
        </div>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
