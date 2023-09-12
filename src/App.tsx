import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./components/profile";
import Projects from "./components/projects";
import StackModal from "./components/stackModal";
import Stacks from "./components/stacks";
import { useModal } from "./contexts/ModalContext";

function App() {
  const {
    isMounted,
    modalContent: { title, ytbEnd },
  } = useModal();

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
      {isMounted && <StackModal title={title} ytbEnd={ytbEnd} />}
    </div>
  );
}

export default App;
