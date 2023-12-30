import { useEffect, useState } from "react";
import "../style/profile.css"
import Card from "../components/Card"
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const getOwnResUrl = "http://localhost:8001/resolution/ownresolutions";

const Profile = (props) => {
    const Navigate = useNavigate();
    const [active, setActive] = useState(0);
    const [res, setRes] = useState([]);
    const logoutTest = async () => {
        console.log("dddd");
        const v = await axios.post("http://localhost:8001/user/logout", { withCredentials: true })
        console.log(v);
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
            console.log(error)
            toast.error("Oops Something Went Wrong");
        }
    }

    useEffect(() => {
        getOwnRes();
    }, []);


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
                            <div className="dark:text-slate-300 toggle-btn" onClick={() => setActive(0)}>My Res</div>
                    }
                    {
                        active == 1 ? <div className="toggle-btn toggle-active" onClick={() => setActive(1)}>Saved</div> :
                            <div className="dark:text-slate-300 toggle-btn" onClick={() => setActive(1)}>Saved</div>
                    }
                </div>
                <div className="bg-backlight-50 dark:bg-slate-600 profile-posts">
                    {
                        res?.map((ele, i) => (
                            <Card key={i} content={ele.data.resolutions} createdAt={ele.createdAt} />
                        ))
                    }
                </div>

            </div>
        </div >
    )
}
export default Profile;