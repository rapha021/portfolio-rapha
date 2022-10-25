export interface IProject {
  name: string
  techs: string[]
  repo_link: string
  demo_link: string
  img: string
  description: string
}

export const projects: Array<IProject> = [
  {
    name: "Kenzie Hub",
    techs: [
      "React",
      "Typescript",
      "Material UI",
      "Styled-Components",
      "Context API",
    ],
    repo_link: "https://github.com/rapha021/kenziehub",
    demo_link: "https://kenziehub-rapha021.vercel.app/",
    img: "assets/project_img/kenziehub.png",
    description:
      "Aplicação para gerenciamento de tecnologias que o usuario domina utilizando uma API Rest.",
  },
  {
    name: "Portfólio",
    techs: [
      "React",
      "Typescript",
      "Material UI",
      "Styled-Components",
      "Context API",
    ],
    repo_link: "https://github.com/rapha021/portfolio-rapha-mui",
    demo_link: "https://rapha-portfolio-materialui.vercel.app/",
    img: "assets/project_img/portfolio.png",
    description:
      "Meu portfólio feito utilizando boas práticas que aprendi durante meu aprendizado em React, Typescript e context api",
  },
  {
    name: "NuKenzie",
    techs: ["React", "Javascript", "Styled-Components"],
    repo_link: "https://github.com/rapha021/nukenzie",
    demo_link: "https://nukenzie-rapha021.vercel.app/",
    img: "assets/project_img/nukenzie.png",
    description:
      "Nu Kenzie, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
  },
  {
    name: "Burguer Kenzie",
    techs: ["React", "Javascript", "Styled-Components"],
    repo_link: "https://github.com/rapha021/burguerkenzie",
    demo_link: "https://hamburguerrp.vercel.app/",
    img: "assets/project_img/kenzieburguer.png",
    description:
      "Aplicação que simula um e-commerce de fast food utilizando uma API Rest.",
  },
  {
    name: "Rapha Game Store",
    techs: ["Javascript", "DOM", "CSS3", "HTML5"],
    repo_link: "https://github.com/rapha021/marketplace",
    demo_link: "https://marketplace-indol.vercel.app/",
    img: "assets/project_img/gamestore.png",
    description:
      "Aplicação que simula um e-commerce de video games utilizando DOM no Javascript.",
  },
]
