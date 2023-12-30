import { FaShare } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import "../style/card.css"
import { useNavigate } from "react-router-dom";


const like = true;
const bookmark = false;

const Card = (props) => {
    const Navigate = useNavigate();
    return (
        <>
            <div className="min-h-40 bg-white dark:bg-slate-800 dark:shadow-sm dark:shadow-cyan-500/50 shrink-0 p-6 pt-9 pb-4 flex flex-col gap-4 relative post-card" onClick={() => Navigate(`/single-post/${455}`)}>
                <div className="absolute text-primary-50 top-3 right-3 flex gap-2 items-center card-share">
                    <FaShare /> Share
                </div>
                <div className=" text-gray-900 text-lg dark:text-gray-300 tracking-wider mb-auto me-12 card-content">
                    {props.content}
                </div>
                <div className=" text-gray-600 dark:text-gray-400 text-sm card-details">
                    8:29 30/12/23
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
                    <div className="grow flex items-center justify-center gap-2 card-comment">
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