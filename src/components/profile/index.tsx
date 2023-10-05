const Profile = () => {
  return (
    <>
      <section
        id="home"
        className="w-full h-96 px-6 py-6 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg bg-gradient-to-br from-[rgba(253,253,253)] to-[rgba(249,233,255)] dark:from-[rgba(70,70,70,0.3)] dark:to-[rgba(65,31,97,0.7)] backdrop-blur-sm font-poppins scroll-mt-20"
      >
        <div className="flex flex-col justify-center h-full gap-4">
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            Hi 👋,
          </p>
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            My name is
          </p>
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            Raphael G.
          </p>
          <p className="text-[38px] md:text-[42px] lg:text-[58px] font-bold text-gray-700 dark:text-purple-200">
            I'm a Fullstack Developer
          </p>
        </div>
      </section>
    </>
  );
};

export default Profile;
