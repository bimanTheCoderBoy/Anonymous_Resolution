import Card from "../components/Card";
import { useState } from "react"
import "../style/singlePost.css"
import { TiTick } from "react-icons/ti";
import { FaTrash } from "react-icons/fa6";

const userId = "122";
const cmtUserId = "122";

const SinglePost = () => {
    const addCmt = () => {
        alert(cmt);
    }
    const [cmt, setCmt] = useState("");
    return (
        <div className="grow h-full bg-backlight-50 dark:bg-slate-700">
            <div className="h-2 bg-backlight-50 dark:bg-slate-800"></div>
            <Card content="sssss" />

            <div className="my-2 mb-6 authors-thought">
                <div className="ms-4 tracking-widest mb-1 my-thought">My Thoughts</div>
                <div className="mx-3 text-xs  bg-slate-50 dark:bg-slate-600 text-black dark:text-slate-200 tracking-widest p-3">{"dsafasda sdfa"}</div>
            </div>

            {/* Add Comment  */}
            <div className="w-full mx-auto flex justify-evenly items-center py-6 px-2">
                <input type="text" placeholder="Add Comment" className="w-10/12 bg-white dark:bg-slate-300 rounded-full add-content-temp" value={cmt} onChange={(e) => setCmt(e.target.value)} />
                <button className="w-8 h-8 bg-teal-800 dark:bg-teal-400 rounded-full flex justify-center items-center text-white text-2xl" onClick={() => { addCmt() }}><TiTick /></button>
            </div>

            {/* Comment section  */}
            <div className="m-2 text-slate-800 dark:text-slate-300">Public Thoughts</div>
            <div className="px-3 min-h-7 text-slate-800 dark:text-slate-300 tracking-wide font-xs flex flex-col bg-white dark:bg-slate-800 rounded-sm  overflow-scroll">
                <div className="cmt flex item-center py-4 px-3 flex items-center  border-b dark:border-slate-300">Aluuuuu</div>
                <div className="cmt flex justify-between item-center py-4 px-3 items-center border-b dark:border-slate-300">Bwhalu{userId == cmtUserId ? <FaTrash className="text-pink-700" /> : <></>}</div>
            </div>
        </div>
    )
}
export default SinglePost;