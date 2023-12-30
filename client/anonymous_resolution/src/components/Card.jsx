import { FaShare } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import "../style/card.css"
import { useNavigate } from "react-router-dom";


const like = true;
const bookmark = false;

const Card = ({ content, createdAt }) => {
    let dateTime;
    let istTime;
    const setDate = () => {
        console.log(createdAt);
        dateTime = new Date(createdAt);
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        // Convert to the local date and time string in IST
        istTime = dateTime.toLocaleString('en-US', options);
    }
    setDate();
    const Navigate = useNavigate();
    return (
        <>
            <div className="min-h-40 bg-white dark:bg-slate-800 dark:shadow-sm dark:shadow-cyan-500/50 shrink-0 p-6 pt-9 pb-4 flex flex-col gap-4 relative post-card">
                <div className="absolute text-primary-50 top-3 right-3 flex gap-2 items-center card-share">
                    <FaShare /> Share
                </div>
                <div className=" text-gray-900 text-lg dark:text-gray-300 tracking-wider mb-auto me-12 card-content" onClick={() => Navigate(`/single-post/${455}`)}>
                    {
                        content?.map((ele, i) => (
                            <div className="m-0" key={i}>{ele}</div>
                        ))
                    }
                </div>
                <div className=" text-gray-600 dark:text-gray-400 text-sm card-details">
                    {dateTime.getHours()}:{dateTime.getMinutes()}  {dateTime.getDate()}/{dateTime.getMonth() + 1}/{dateTime.getFullYear()}
                </div>
                <div className="flex text-lg border-t-2 p-2 text-gray-500 dark:text-gray-400 justify-evenly card-actions">
                    <div className="grow flex items-center justify-center gap-2 card-like">
                        {
                            like ?
                                <GoHeartFill className="like-active" />
                                :
                                <GoHeart />
                        } like
                    </div>
                    <div className="grow flex items-center justify-center gap-2 card-comment" onClick={() => Navigate(`/single-post/${455}`)}>
                        <FaRegComment /> Comment
                    </div>
                    <div className="grow flex items-center justify-center gap-2 card-bookmark">
                        {
                            bookmark ?
                                <BsBookmarkCheckFill className="bookmark-active" />
                                :
                                <BsBookmarkCheck />
                        } save
                    </div>


                </div>
            </div>
        </>
    )
}
export default Card;