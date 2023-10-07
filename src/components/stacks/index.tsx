interface IStack {
  title: string;
  src: string;
}

const Stacks = () => {
  const stacks: Array<IStack> = [
    { title: "github", src: "/logos/github.svg" },
    { title: "css", src: "/logos/css.svg" },
    { title: "git", src: "/logos/git.svg" },
    { title: "html", src: "/logos/html.svg" },
    { title: "typescript", src: "/logos/typescript.svg" },
    { title: "postgresql", src: "/logos/postgresql.svg" },
    { title: "python", src: "/logos/python.svg" },
    { title: "sass", src: "/logos/sass.svg" },
    { title: "nodejs", src: "/logos/nodejs.svg" },
    { title: "tailwind", src: "/logos/tailwind.svg" },
  ];
  return (
    <>
      <section
        id="stacks"
        className="w-full h-fit px-6 py-6 box-border flex items-center justify-between rounded-xl shadow-lg bg-gradient-to-br from-[rgba(253,253,253)] to-[#e9fcff] dark:from-[rgba(70,70,70,0.3)] dark:to-[rgba(31,87,97,0.7)] backdrop-blur-sm font-poppins scroll-mt-20"
      >
        <div className="w-full h-[80%] font-poppins flex flex-col items-center gap-3">
          <h2 className="text-[38px] md:text-[58px] font-bold text-blue-400">
            Minhas Stacks
          </h2>

          <p className="text-[14px] md:text-[16px] text-blue-200">
            Tecnologias que tenho trabalhado e aprendido.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            {stacks.map((s) => (
              <img
                src={s.src}
                key={s.title}
                alt={`${s.title} logo`}
                className="w-14 sm:w-16 md:w-24 lg:w-32 draggable"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stacks;
