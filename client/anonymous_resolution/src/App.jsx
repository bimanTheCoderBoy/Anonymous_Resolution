// import Footer from "./components/footer/footer";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DarkThemeToggle } from "flowbite-react";
// import Nav from "./components/nav/nav";
import Header from "./components/basics/Header";
import Navs from "./components/basics/Navs";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AddPost from "./pages/AddPost";
import SinglePost from './pages/SinglePost';
import { useState } from 'react';
import Login from './pages/Login';
// import ""

function App() {
  const [title, setTitle] = useState("Home");
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <div className="h-screen flex flex-col bg-white dark:bg-slate-800">
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/single-post/:id" element={<SinglePost />} />
          </Routes>
          <Navs />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
