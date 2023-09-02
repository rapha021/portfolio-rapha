const Stacks = () => {
  return (
    <>
      <section className="w-full h-fit px-6 py-6 box-border flex items-center justify-between rounded-xl shadow-lg bg-gradient-to-br from-[rgba(253,253,253)] to-[#e9fcff] dark:from-[rgba(70,70,70,0.3)] dark:to-[rgba(31,87,97,0.7)] backdrop-blur-sm font-poppins">
        <div className="w-full h-[80%] font-poppins flex flex-col items-center gap-3">
          <h2 className="text-[38px] md:text-[58px] font-bold text-blue-400">
            My Stacks
          </h2>

          <p className="text-[14px] md:text-[16px] text-blue-200">
            Technologies that I have been working and learning
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <img src="/logos/github.svg" alt="github logo" />
            <img src="/logos/css.svg" alt="css logo" />
            <img src="/logos/git.svg" alt="git logo" />
            <img src="/logos/html.svg" alt="html logo" />
            <img src="/logos/js.svg" alt="javascript logo" />
            <img
              src="/logos/typescript.svg"
              alt="typescript logo"
              className="w-[106px]"
            />
            <img src="/logos/react.svg" alt="react logo" />
            <img
              src="/logos/postgresql.svg"
              alt="postgresql logo"
              className="w-[110px]"
            />
            <img
              src="/logos/python.svg"
              alt="python logo"
              className="w-[110px]"
            />
            <img src="/logos/sass.svg" alt="sass logo" />
            <img
              src="/logos/nodejs.svg"
              alt="node javascript logo"
              className="w-[100px]"
            />
            <img src="/logos/tailwind.svg" alt="tailwind logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Stacks;
