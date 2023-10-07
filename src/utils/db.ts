import { IProject } from "../components/projects";
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

export const projects: Array<IProject> = [
  {
    imgLink:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    ytbEnd: "j1Y3GFa_kKk",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    ytbEnd: "Er-YAwYChlQ",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    ytbEnd: "WQKfGyibG_k",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    ytbEnd: "CykDldKK59o",
  },
];
