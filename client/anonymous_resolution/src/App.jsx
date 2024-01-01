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
import { useEffect, useState } from 'react';
import axios from 'axios';
import Landing from './pages/Langing';
// import ""
const authApi = "https://resoluxe.onrender.com/user/isloggedin"
function App() {
  const [auth, checkAuth] = useState(false);
  const [profile, setProfile] = useState({});
  let response;
  const uservalidation = async () => {
    try {
      var response = await axios.get(authApi, { withCredentials: true });
      setProfile(response.data.user);
      checkAuth(true);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    // console.log(process.env.TRY||"NOT tryting");
    uservalidation();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Toaster />
        {
          !auth ?
            <div className="h-screen flex flex-col">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Landing />} />
              </Routes>
            </div>
            :
            <div className="h-screen flex flex-col bg-white dark:bg-slate-800">
              <Header />
              <Routes>

                <>
                  <Route path="/" element={<Home userId={profile._id}/>} />
                  <Route path="/profile" element={<Profile profile={profile} />} />
                  <Route path="/add-post" element={<AddPost id={profile._id} />} />
                  <Route path="/single-post/:id" element={<SinglePost Userid={profile._id} />} />
                </>


              </Routes>
              <Navs />
            </div>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
