import { ElementType } from "react";
import ProjectPreview from "./projectPreview";
import { projects } from "../../utils/db";

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
  ytbEnd: string;
}

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full h-fit px-6 py-6 box-border flex items-center justify-between rounded-xl shadow-lg bg-gradient-to-br from-[rgba(253,253,253)] to-[rgba(255,39,104,0.29)] dark:from-[rgba(70,70,70,0.3)] dark:to-[rgba(255,39,104,0.29)] backdrop-blur-sm font-poppins scroll-mt-20"
      >
        <div className="w-full h-[80%] font-poppins flex flex-col items-center gap-3">
          <h2 className="text-[38px] md:text-[58px] font-bold text-rose-500">
            Projetos
          </h2>

          <p className="text-[14px] md:text-[16px] text-rose-300">
          Projetos em que estou envolvido atualmente e nos quais já trabalhei.
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
