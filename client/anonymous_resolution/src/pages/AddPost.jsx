import { useState } from "react"
import "../style/addPost.css"
import { toast } from 'react-hot-toast';
import { TiTick } from "react-icons/ti";

const AddPost = () => {
    const [content, setContent] = useState(["JYotitti", "dsafas"]);

    const addCont = () => {
        if (!temp)
            return
        const a = content;
        a.push(temp);
        console.log(temp);
        setTemp("");
        setContent([...a]);
    }
    const [temp, setTemp] = useState("");
    const submit = () => {
        toast.success("Uploaded");
    }
    return (
        <div className="grow w-full bg-backlight-50 dark:bg-slate-700 overflow-scroll add-post-page">
            <div className="mt-6 text-xl tracking-wide text-center text-slate-700 dark:text-slate-300 font-semibold ">Write Your</div>
            <div className="resolution-text">Resolution</div>
            <div className="w-11/12 mt-6 mx-auto p-5 max-h-72 overflow-scroll text-slate-900 dark:text-slate-300 bg-white dark:bg-slate-800 shadow-slate-800 dark:shadow-slate-300 added-res">
                <ul>
                    {
                        content.map((str, index) => (
                            <li key={index}>{str}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-10/12 mx-auto flex justify-evenly items-center py-6 px-2">
                <input type="text" className="w-10/12 dark:bg-slate-300 rounded-full add-content-temp" value={temp} onChange={(e) => setTemp(e.target.value)} />
                <button className="w-8 h-8 bg-teal-800 dark:bg-teal-400 rounded-full flex justify-center items-center text-white text-2xl" onClick={() => { addCont() }}><TiTick /></button>
            </div>
            <div className="w-full flex justify-center">
                <button className=" h-12 w-2/6 rounded-md shadow bg-primary-50 tracking-widest final-upload">Post</button>
            </div>
            <div className="m-5 ms-10 text-slate-800 dark:text-slate-400 info">
                Step 1: Write your resolution<br />
                Step 2: Click on sdd button<br />
                Step 3: Again write your next resolution<br />
                Step 4: After completion you can also add your thoughts below<br />
                Step 5: Post your New Year's Resolution<br />
            </div>
            <div className="w-10/12 mx-auto flex justify-evenly items-center py-12">
                <textarea name="thoughts" placeholder="Your Thoughts(Optional)" className="min-h-8 dark:bg-slate-300" id="" cols="40" rows="2"></textarea>
            </div>

        </div>
    )
}
export default AddPost;