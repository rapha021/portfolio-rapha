import { ElementType } from "react";
import ProjectPreview from "./projectPreview";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiChakraui,
  SiDjango,
  SiJsonwebtokens,
  SiMui,
  SiPostgresql,
  SiPython,
  SiReactrouter,
  SiStyledcomponents,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

interface IStack {
  title: string;
  icon: ElementType;
}

export interface IProject {
  imgLink: string;
  title: string;
  description: string;
  stacks: Array<IStack>;
  demoLink: string;
  repoLink: string;
}

const Projects = () => {
  const projects: Array<IProject> = [
    {
      imgLink: "https://source.unsplash.com/featured/300x201",
      title: "Gerenciador de finanças",
      description:
        "Uma aplicação importa arquivos CNAB e simplifica a análise e gestão de atividades financeiras dos usuários.",
      stacks: [
        { title: "React,", icon: BiLogoReact },
        { title: "Typescript,", icon: BiLogoTypescript },
        { title: "Chakra UI,", icon: SiChakraui },
        { title: "Styled Components,", icon: SiStyledcomponents },
        { title: "React Router", icon: SiReactrouter },
        { title: "Context API", icon: TbApi },
        { title: "Python", icon: SiPython },
        { title: "Django", icon: SiDjango },
        { title: "PostgreSQL", icon: SiPostgresql },
        { title: "JWT", icon: SiJsonwebtokens },
      ],
      demoLink: "https://cnab-rapha021.vercel.app/login",
      repoLink: "https://github.com/rapha021/desafio-backend-python",
    },
    {
      imgLink: "https://source.unsplash.com/featured/300x201",
      title: "Agenda de contatos",
      description:
        "Um app de agenda de contatos simplifica o armazenamento e gerenciamento de informações, facilitando a comunicação e a gestão de relacionamentos.",
      stacks: [
        { title: "React,", icon: BiLogoReact },
        { title: "Typescript,", icon: BiLogoTypescript },
        { title: "Chakra UI,", icon: SiChakraui },
        { title: "Styled Components,", icon: SiStyledcomponents },
        { title: "React Router", icon: SiReactrouter },
        { title: "Context API", icon: TbApi },
        { title: "JWT", icon: SiJsonwebtokens },
      ],
      demoLink: "https://agenda-fullstack-rapha021.vercel.app/login",
      repoLink: "https://github.com/rapha021/agenda_fullstack_ts",
    },
    {
      imgLink: "https://source.unsplash.com/featured/300x201",
      title: "Kenzie Hub",
      description:
        "Aplicação para gerenciamento de tecnologias que o usuario domina utilizando uma API Rest.",
      stacks: [
        { title: "React,", icon: BiLogoReact },
        { title: "Typescript,", icon: BiLogoTypescript },
        { title: "Material UI,", icon: SiMui },
        { title: "Styled Components,", icon: SiStyledcomponents },
        { title: "Context API", icon: TbApi },
      ],
      demoLink: "http://kenziehub.raphaelgloria.com/",
      repoLink: "https://github.com/rapha021/kenziehub",
    },
    {
      imgLink: "https://source.unsplash.com/featured/300x201",
      title: "NuKenzie",
      description:
        "NuKenzie, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
      stacks: [
        { title: "React,", icon: BiLogoReact },
        { title: "Javascript,", icon: BiLogoJavascript },
        { title: "Styled Components,", icon: SiStyledcomponents },
      ],
      demoLink: "http://nukenzie.raphaelgloria.com/",
      repoLink: "https://github.com/rapha021/nukenzie",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="w-full h-fit px-6 py-6 box-border flex items-center justify-between rounded-xl shadow-lg bg-gradient-to-br from-[rgba(253,253,253)] to-[rgba(255,39,104,0.29)] dark:from-[rgba(70,70,70,0.3)] dark:to-[rgba(255,39,104,0.29)] backdrop-blur-sm font-poppins scroll-mt-20"
      >
        <div className="w-full h-[80%] font-poppins flex flex-col items-center gap-3">
          <h2 className="text-[38px] md:text-[58px] font-bold text-rose-500">
            Projects
          </h2>

          <p className="text-[14px] md:text-[16px] text-rose-300">
            Projects I am currently involved in and have previously worked on.
          </p>

          <div className="flex flex-wrap gap-6 justify-center pt-6">
            {projects.map((p) => (
              <ProjectPreview project={p} key={`${p.title} project`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
