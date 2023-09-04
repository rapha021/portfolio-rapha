import { FaGithub, FaLinkedin, FaFilePdf, FaMoon } from "react-icons/fa6";
import { BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const { isDark, toggleCurrentTheme } = useTheme();

  return (
    <>
      <header className="w-full h-16 backdrop-blur-lg pl-6 pr-6 xl:pr-24 xl:pl-24 flex justify-center fixed z-10 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(86,52,104,0.4)]">
        <div
          id="container"
          className="w-[1280px] h-full flex items-center justify-between gap-4"
        >
          Logo aqui
          <section className="md:flex gap-4 hidden">
            <div className="w-fit h-full flex gap-4 justify-end items-center font-['DM Sans'] font-dm-sans">
              <button className="h-8 w-20 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white duration-200 dark:text-gray-100 dark:hover:bg-slate-500 ">
                Home
              </button>
              <button className="h-8 w-20 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white duration-200 dark:text-gray-100 dark:hover:bg-slate-500 ">
                About
              </button>
              <button className="h-8 w-20 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white duration-200 dark:text-gray-100 dark:hover:bg-slate-500 ">
                Techs
              </button>
              <button className="h-8 w-20 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white duration-200 dark:text-gray-100 dark:hover:bg-slate-500 ">
                Projects
              </button>
              <button className="h-8 w-20 rounded-md text-slate-600 hover:bg-slate-600 hover:text-white duration-200 dark:text-gray-100 dark:hover:bg-slate-500 ">
                Contact
              </button>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/rapha021" target="_blank">
                <FaGithub
                  size="30px"
                  className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300 duration-200"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/raphaelgloria/"
                target="_blank"
              >
                <FaLinkedin
                  size="30px"
                  className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300 duration-200"
                />
              </a>

              <a href="#">
                <FaFilePdf
                  size="30px"
                  className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300 duration-200"
                />
              </a>
              <button onClick={() => toggleCurrentTheme(!isDark)}>
                {!isDark ? (
                  <FaMoon
                    size="30px"
                    className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300 duration-200"
                  />
                ) : (
                  <BsFillSunFill
                    size="30px"
                    className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-100 dark:text-gray-300 duration-200"
                  />
                )}
              </button>
            </div>
          </section>
          {/* mobile menu */}
          <section className="flex md:hidden">
            <AiOutlineMenu size="26" className="dark:text-gray-50" />
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
