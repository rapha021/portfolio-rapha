import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Stacks from "./components/stacks";

function App() {
  return (
    <div id="main" className="dark:bg-gray-900">
      <Header />
      <section className="flex justify-center pt-10">
        <div
          id="wrapper"
          className="w-full max-w-[1280px] h-full px-6 xl:px-0 flex flex-col gap-10"
        >
          <Profile />
          <Stacks />
          <Projects />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
