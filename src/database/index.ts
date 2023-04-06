export interface IProject {
  name: string;
  techs: string[];
  repo_link: string;
  demo_link: string;
  img: string;
  description: string;
}

export const projects: Array<IProject> = [
  {
    name: "Agenda de contatos",
    techs: [
      "React",
      "Typescript",
      "Styled-Components",
      "Context API",
      "React Router",
      "Chakra-UI",
    ],
    repo_link: "https://github.com/rapha021/agenda_fullstack_ts",
    demo_link: "https://agenda-fullstack-rapha021.vercel.app/login",
    img: "assets/project_img/agenda_fullstack.png",
    description:
      "Um app de agenda de contatos permite armazenar e gerenciar informações de contatos importantes, como nomes, endereços de e-mail e números de telefone, além de oferecer recursos para facilitar a comunicação e o gerenciamento de relacionamentos pessoais e profissionais.",
  },
  {
    name: "Anticipation Calculator",
    techs: ["React", "Typescript", "Styled-Components", "Context API"],
    repo_link: "https://github.com/rapha021/anticipation-calculator",
    demo_link: "https://anticipation-calculator-rapha021.vercel.app/",
    img: "assets/project_img/anticipation.png",
    description:
      "Essa aplicação calcula a antecipação de valores de vendas a partir do percentual de antecipação escolhido pelo usuário, fornecendo uma estimativa do valor a ser recebido antecipadamente. Ela é útil para empresas que precisam de fluxo de caixa e desejam antecipar recebimentos.",
  },
  {
    name: "CNAB",
    techs: [
      "React",
      "Typescript",
      "Chakra UI",
      "Styled-Components",
      "React Router",
      "Context API",
      "Python",
      "Django Rest Framework",
      "PostgreSQL",
      "JWT",
    ],
    repo_link: "https://github.com/rapha021/desafio-backend-python",
    demo_link: "https://cnab-rapha021.vercel.app/login",
    img: "assets/project_img/cnab.png",
    description:
      "Aplicação é capaz de importar arquivos CNAB e apresentar informações detalhadas sobre lojas e transações bancárias em um formato fácil de entender. Isso permite que os usuários analisem e gerenciem suas atividades financeiras de maneira mais eficiente.",
  },
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
    demo_link: "http://kenziehub.raphaelgloria.com/",
    img: "assets/project_img/kenziehub.png",
    description:
      "Aplicação para gerenciamento de tecnologias que o usuario domina utilizando uma API Rest.",
  },
  {
    name: "NuKenzie",
    techs: ["React", "Javascript", "Styled-Components"],
    repo_link: "https://github.com/rapha021/nukenzie",
    demo_link: "http://nukenzie.raphaelgloria.com/",
    img: "assets/project_img/nukenzie.png",
    description:
      "Nu Kenzie, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
  },
];
