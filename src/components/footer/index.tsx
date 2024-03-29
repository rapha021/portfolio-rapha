import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer
        className="w-full h-80 lg:h-52 flex justify-center px-6 lg:px-24 font-dm-sans dark:text-gray-50"
        id="socials"
      >
        <div
          id="container"
          className="w-full max-w-[1280px] h-full flex flex-col gap-3 justify-evenly "
        >
          <section className="w-full flex justify-between items-center flex-col lg:flex-row pt-6 lg:px-6">
            <div className="w-full h-full flex gap-6 items-center justify-center flex-col lg:flex-row lg:gap-20">
              <p>+55 21 97739-3115</p>
              <p>contato@raphaelgloria.com</p>

              <div className="flex gap-3">
                <a href="https://github.com/rapha021" target="_blank">
                  <FaGithub
                    size="30px"
                    className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-500"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/raphaelgloria/"
                  target="_blank"
                >
                  <FaLinkedin
                    size="30px"
                    className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-500"
                  />
                </a>

                {/* <a href="#" target="_blank">
                  <FaFilePdf
                    size="30px"
                    className="text-slate-600 hover:text-slate-700 dark:hover:text-slate-500"
                  />
                </a> */}
              </div>
            </div>
          </section>

          <hr />

          <section className="w-full flex lg:justify-between items-center flex-col lg:flex-row gap-3 lg:gap-0 pl-6 pr-6">
            <div className="flex gap-x-2 flex-wrap justify-center sm:gap-6">
              {/* <button className="h-8 rounded-md text-slate-600 dark:text-gray-100 hover:text-slate-900 ">
                Home
              </button> */}
              <a
                href="#home"
                className="h-8 rounded-md text-slate-600 dark:text-gray-100 hover:text-slate-900 "
              >
                Sobre Mim
              </a>
              <a
                href="#stacks"
                className="h-8 rounded-md text-slate-600 dark:text-gray-100 hover:text-slate-900 "
              >
                Stacks
              </a>
              <a
                href="#projects"
                className="h-8 rounded-md text-slate-600 dark:text-gray-100 hover:text-slate-900 "
              >
                Projetos
              </a>
              {/* <button className="h-8 rounded-md text-slate-600 dark:text-gray-100 hover:text-slate-900 ">
                Contact
              </button> */}
            </div>

            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-600 dark:text-gray-200 font-normal">
                Created by Raphael
              </p>

              <p className="text-xs text-gray-300 dark:text-gray-400 font-light">
                Inspired in{" "}
                <a
                  href="https://github.com/pavanmg007"
                  target="_blank"
                  className="hover:text-purple-600 dark:hover:text-purple-300"
                >
                  Pavan MG
                </a>
                &nbsp;design
              </p>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
