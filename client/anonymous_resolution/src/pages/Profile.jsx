import { useState } from "react";
import "../style/profile.css"
import Card from "../components/Card"
const Profile = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="dark:bg-slate-900 bg-backlight-50 border-t-2 profile-page">
            <div className="profile-details">
                <div className="profile-pic">
                    <img src="../../public/imgs/logo1.jpg" alt="no pic" className="profile-img" />
                </div>
                <div className="profile-dets">

                    <div className="dark:text-gray-300 profile-name">
                        Jyotirmoy
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
                    <Card content="jyoitititit" />
                    <Card content="nEytfdsdjfs" />
                    <Card content="Cnoiahdsf" />
                </div>

            </div>
        </div >
    )
}
export default Profile;