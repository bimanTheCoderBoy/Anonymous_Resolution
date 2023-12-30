import { useState } from "react"
import "../style/addPost.css"
import { toast } from 'react-hot-toast';

const AddPost = () => {
    const [content, setContent] = useState("");
    const submit = () => {
        toast.success("Uploaded");
    }
    return (
        <div className="grow bg-backlight-50 dark:bg-slate-800 add-post-page">
            <div className="mt-6 text-xl tracking-wide text-center text-slate-700 dark:text-slate-300 font-semibold ">Write Your</div>
            <div className="resolution-text">Resolution</div>
            <div className="mx-auto pt-3 w-10/12 add-area">
                {/* <form method="patch" className=''> */}
                <textarea name="content" className=" dark:bg-slate-600 text-gray-800 dark:text-gray-200 w-full overflow-scroll add-textarea" rows="15" id="poemContent" placeholder='Enter the Poem' onChange={(e) => setContent(e.target.value)}></textarea>
                {/* </form> */}
            </div>
            <div className="mx-auto mt-3  flex justify-center items-center font-semibold tracking-wide dark:shadow-lg dark:shadow-cyan-500/50 post-btn" onClick={() => { submit() }}>Submit</div>
        </div>
    )
}
export default AddPost;