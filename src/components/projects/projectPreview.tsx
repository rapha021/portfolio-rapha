import { BsLink45Deg } from "react-icons/bs";
import { IProject } from ".";
import { FaGithub } from "react-icons/fa6";

interface IprojectPreview {
  project: IProject;
}

const ProjectPreview = ({ project: p }: IprojectPreview) => {
  return (
    <>
      <div
        className="bg-rose-900 w-[230px] sm:w-[300px] lg:w-[350px] flex flex-col rounded-xl text-white"
        id="project-1"
      >
        <div id="project-image">
          <img
            src={p.imgLink}
            alt={`${p.title} preview image`}
            className="w-full rounded-t-xl"
          />
        </div>

        <div
          id="project-infos"
          className="flex flex-col justify-between gap-2 px-6 py-6 h-full"
        >
          <h2 className="text-2xl">{p.title}</h2>

          <p className="text-sm font-light font-poppins">{p.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {p.stacks.map((s) => (
              <p
                key={s.title}
                className="flex gap-1 items-center font-poppins font-light text-xs"
              >
                <s.icon size="20px" />
                {s.title}
              </p>
            ))}
          </div>

          <div className="w-full flex justify-between mt-3">
            <a
              href={p.demoLink}
              className="flex gap-1 items-center underline underline-offset-4 hover:text-gray-200"
              target="_blank"
            >
              <BsLink45Deg size="20px" />
              Demo Preview
            </a>

            <a
              href={p.repoLink}
              className="flex gap-2 items-center underline underline-offset-4 hover:text-gray-200"
              target="_blank"
            >
              <FaGithub size="18px" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
