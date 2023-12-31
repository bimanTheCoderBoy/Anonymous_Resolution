import Card from "../components/Card";
import { useEffect, useState } from "react"
import "../style/singlePost.css"
import { TiTick } from "react-icons/ti";
import { FaTrash } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";

const uid = 1, cmtid = 1;


const getSingleResUrl = "http://localhost:8001/resolution/getsingleresolution"
const getThoughtsUrl = "http://localhost:8001/thought/getthoughts";
const addCmtUrl = "http://localhost:8001/thought/putthought";
const deleteCmtUrl = "http://localhost:8001/thought/deletethought";

const SinglePost = ({ Userid }) => {
    let res;
    const { id } = useParams();


    const [content, setContent] = useState([]);
    const [date, setDate] = useState("");
    const [resId, setResId] = useState("");
    const [creatorId, setCreatorId] = useState("");
    const [thoughts, setThoughts] = useState("");

    const [cmt, setCmt] = useState("");
    const [thoughtsArr, setThoughtsArr] = useState([]);
    console.log(id);
    const getSingleRes = async () => {
        try {
            res = await axios.get(`${getSingleResUrl}/${id}`);
            setContent(res.data.data.data.resolutions);
            setThoughts(res.data.data.data.thought);
            setDate(res.data.data.createdAt);
            setCreatorId(res.data.data.createdId);
            setResId(res.data.data._id);
            getCmt(res.data.data._id);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleRes();
    }, [])

    const getCmt = async (id) => {
        try {
            const a = await axios.get(`${getThoughtsUrl}/${id}`);
            setThoughtsArr(a.data.thoughts.reverse());
        } catch (error) {
            console.log(error);
        }
    }

    const addCmt = async () => {
        try {
            const body = {
                userId: Userid,
                resolutionId: resId,
                text: cmt
            };
            const a = await axios.post(addCmtUrl, JSON.stringify(body), {
                headers: { "Content-type": "application/json" },
                withCredentials: true,
            });
            if (a) {
                getCmt(resId);
                setCmt("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCmt = async (cmtId) => {
        try {
            const body = {
                userId: Userid,
                thoughtId: cmtId
            }
            console.log(body);
            const a = await axios.post(deleteCmtUrl, JSON.stringify(body), {
                headers: { "Content-type": "application/json" },
                withCredentials: true,
            });
            console.log(a);
            if (a) {
                getCmt(resId);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grow h-full bg-backlight-50 dark:bg-slate-700">
            <div className="h-2 bg-backlight-50 dark:bg-slate-800"></div>
            <Card content={content} id={resId} createdAt={date} isSaved={true} isLiked={false} userId={Userid} />

            {
                thoughts ?
                    <div className="my-2 mb-6 authors-thought">
                        <div className="ms-4 tracking-widest mb-1 my-thought">My Thoughts</div>
                        <div className="mx-3 text-xs  bg-slate-50 dark:bg-slate-600 text-black dark:text-slate-200 tracking-widest p-3">{thoughts}</div>
                    </div>
                    : <></>
            }

            {/* Add Comment  */}
            <div className="w-full mx-auto flex justify-evenly items-center py-6 px-2">
                <input type="text" placeholder="Add Comment" className="w-10/12 bg-white dark:bg-slate-300 rounded-full add-content-temp" value={cmt} onChange={(e) => { e.preventDefault(); setCmt(e.target.value) }} />
                <button className="w-8 h-8 bg-teal-800 dark:bg-teal-400 rounded-full flex justify-center items-center text-white text-2xl" onClick={() => { addCmt() }}><TiTick /></button>
            </div>

            {/* Comment section  */}
            <div className="m-2 text-slate-800 dark:text-slate-300">Public Thoughts</div>
            <div className="px-3 min-h-7 max-h-48 overflow-scroll text-slate-800 dark:text-slate-300 tracking-wide font-xs flex flex-col bg-white dark:bg-slate-800 rounded-sm  overflow-scroll">
                {
                    thoughtsArr?.map((ele, i) => (
                        <div key={i} className="cmt flex justify-between item-center py-4 px-3 items-center border-b dark:border-slate-300">{ele.text} {ele.userId == Userid ? <FaTrash className="text-pink-700" onClick={() => { deleteCmt(ele._id) }} /> : <></>}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default SinglePost;