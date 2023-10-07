import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { toast } from "react-toastify";

const Profile = () => {
  const Notify = () => {
    toast("E-Mail copied to clipboard", {
      type: "info",
      toastId: "email-clipboard",
    });
    navigator.clipboard.writeText("contato@raphaelgloria.com");
  };

  return (
    <>
      <section
        id="home"
        className="w-full h-fit px-6 py-6 flex flex-col lg:flex-row items-center justify-between rounded-xl shadow-lg bg-gradient-to-br from-[rgba(253,253,253)] to-[rgba(249,233,255)] dark:from-[rgba(70,70,70,0.3)] dark:to-[rgba(65,31,97,0.7)] backdrop-blur-sm font-poppins scroll-mt-20"
      >
        <div className="flex flex-col justify-center h-full gap-4 max-lg:border-b lg:border-r border-solid border-purple-300 lg:pr-8 pb-8">
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            Oi 👋,
          </p>
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            Meu nome é
          </p>
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            Raphael G.
          </p>
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            Desenvolvedor Fullstack
          </p>
        </div>

        <div className="w-full md:w-6/12 lg:w-4/12 flex justify-between items-center pt-6 lg:pl-6">
          <a
            href="https://www.linkedin.com/in/raphaelgloria/"
            className="flex flex-col gap-2 items-center justify-center hover:text-purple-400 transition-all"
          >
            <BsLinkedin size="38" className="text-purple-900 dark:text-purple-200" />
            <article>Linkedin</article>
          </a>

          <a
            href="https://www.github.com/rapha021"
            target="_blank"
            className="flex flex-col gap-2 items-center justify-center hover:text-purple-400 transition-all"
          >
            <BsGithub size="38" className="text-purple-900 dark:text-purple-200" />
            <article>Github</article>
          </a>

          <a
            href="#"
            className="flex flex-col gap-2 items-center justify-center hover:text-purple-400 transition-all"
            onClick={Notify}
          >
            <BiMailSend size="42" className="text-purple-900 dark:text-purple-200" />
            <article>E-Mail</article>
          </a>
        </div>
      </section>
    </>
  );
};

export default Profile;
