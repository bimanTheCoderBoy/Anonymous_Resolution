import Footer from "./components/footer/footer";
import { DarkThemeToggle} from "flowbite-react";
import Nav from "./components/nav/nav";
function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-white dark:bg-slate-800">
      <Nav/>
      <DarkThemeToggle className="absolute right-2 top-2 scale-125"/>
        <Footer/>
        </div>
    </>
  );
}

export default App;
