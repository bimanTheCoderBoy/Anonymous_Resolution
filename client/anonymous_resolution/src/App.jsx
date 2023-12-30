import Footer from "./components/footer/footer";
import { DarkThemeToggle} from "flowbite-react";
import Nav from "./components/nav/nav";
import { useState } from "react";


function App() {
  const [title,setTitle]=useState("Home")
  return (
    <>
   
      <div className="min-h-screen min-w-screen bg-white dark:bg-slate-800">
      <Nav title={title}/>
      <DarkThemeToggle className="absolute right-2 top-2 scale-125"/>
        <Footer setTitle={setTitle}  />
        </div>
    </>
  );
}

export default App;
