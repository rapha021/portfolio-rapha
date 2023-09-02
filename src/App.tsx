import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./components/profile";
import Stacks from "./components/stacks";

function App() {
  return (
    <div id="main" className="dark:bg-gray-900">
      <Header />
      <section className="flex justify-center pt-28">
        <div
          id="wrapper"
          className="w-full max-w-[1280px] h-full pl-6 pr-6 xl:pl-0 xl:pr-0 flex flex-col gap-12"
        >
          <Profile />
          <Stacks />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
