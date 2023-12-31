import { useEffect, useState } from "react";
import "../style/profile.css"
import Card from "../components/Card"
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoTrashBin } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

const deleteResUrl = "http://localhost:8001/resolution/delete"
const getOwnResUrl = "http://localhost:8001/resolution/ownresolutions";
const getSavedResUrl = "http://localhost:8001/user/getsavedresolutions";

const Profile = (props) => {
    const Navigate = useNavigate();
    const [active, setActive] = useState(0);
    const [res, setRes] = useState([]);
    const [deleteId, setDeleleId] = useState("");
    const logoutTest = async () => {
        window.open("http://localhost:8001/user/logout", "_self")
    }

    const getOwnRes = async () => {
        try {
            const body = { creatorId: props.profile._id };
            const resp = await axios.post(getOwnResUrl, JSON.stringify(body), {
                headers: { "Content-type": "application/json" },
                withCredentials: true,
            });

            setRes(resp.data.resolutions);
            console.log(resp.data.resolutions);
        } catch (error) {
            // console.log(error)
            toast.error("Oops Something Went Wrong");
        }
    }

    const getSavedRes = async () => {
        try {
            const body = { userId: props.profile._id };
            const resp = await axios.post(getSavedResUrl, JSON.stringify(body), {
                headers: { "Content-type": "application/json" },
                withCredentials: true,
            });

            setRes(resp.data.resolutions);
            console.log(resp.data.resolutions);
        } catch (error) {
            console.log(error)
            toast.error("Oops Something Went Wrong");
        }
    }

    useEffect(() => {
        getOwnRes();
    }, []);


    //Delete res
    const DelRes = async () => {
        try {
            const body = { resolutionId: deleteId };
            console.log(body);
            const a = await axios.post(deleteResUrl, JSON.stringify(body), {
                headers: { "Content-type": "application/json" },
                withCredentials: true,
            });
            if (a) {
                console.log(a);
                toast.success("Resolution Deleted");
                togglePop();
                getOwnRes();
            }
        } catch (error) {
            toast.error("Delete Unsuccesful");
        }
    }

    const togglePop = (id) => {
        console.log(id);
        const a = document.querySelector(".pop-up");
        // const b = document.querySelector(".delete-yes-btn");
        if (a.classList.contains("hidden")) {
            a.classList.remove("hidden");
            setDeleleId(id);
        }
        else {
            a.classList.add("hidden");
            setDeleleId("");
        }
    }

    return (
        <div className="dark:bg-slate-900 bg-backlight-50 border-t-2 profile-page">
            <div className="mt-4 mx-4 flex profile-details">
                <div className="w-2/6 profile-pic" onClick={() => console.log(props.profile)}>
                    <img src="../../public/imgs/logo1.jpg" alt="no pic" className="profile-img" />
                </div>
                <div className="w-4/6 flex justify-center ps-4 relative profile-dets">
                    <div className="absolute top-3 right-3 text-xl Logout-btn" onClick={() => { logoutTest(); Navigate("/") }}><TbLogout /></div>
                    <div className="dark:text-gray-300 profile-name">
                        {props.profile.username}
                    </div>
                    <div className="dark:text-slate-500 profile-uploads-count">Resolutions: 2
                    </div>
                </div>
            </div>

            <div className="resolutions">
                <div className="toggler">
                    {
                        active == 0 ?
                            <div className="toggle-btn toggle-active" onClick={() => setActive(0)}>My Res</div> :
                            <div className="dark:text-slate-300 toggle-btn" onClick={() => { setActive(0); getOwnRes() }}>My Res</div>
                    }
                    {
                        active == 1 ? <div className="toggle-btn toggle-active" onClick={() => setActive(1)}>Saved</div> :
                            <div className="dark:text-slate-300 toggle-btn" onClick={() => { setActive(1); getSavedRes() }}>Saved</div>
                    }
                </div>
                <div className="bg-backlight-50 dark:bg-slate-600 profile-posts">
                    {
                        res?.map((ele, i) => (
                            <div className="flex flex-col relative" key={i}>
                                <Card content={ele._doc.data.resolutions} id={ele._doc._id} createdAt={ele._doc.createdAt} isSaved={ele.isLiked} isLiked={ele.isSaved} userId={props.profile._id} />
                                <div className="absolute right-3 bottom-3 postDeleteBtn" onClick={() => { togglePop(ele._doc._id); }}><FaRegTrashCan /></div>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute flex flex-col gap-3 text-slate-300 dark:text-slate-800 bg-slate-800 dark:bg-slate-300 p-3 top-1/3 left-1/4 pop-up hidden">
                    <div className="text-center">Are You Sure You Want<br />To Delete</div>
                    <div className="flex">
                        <button className="grow text-black bg-primary-50" onClick={() => { DelRes(); }}>Yes</button>
                        <button className="grow text-black bg-pink-50" onClick={() => { togglePop() }}>No</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Profile;