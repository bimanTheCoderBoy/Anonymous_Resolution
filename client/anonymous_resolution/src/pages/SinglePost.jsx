import Card from "../components/Card";

const SinglePost = () => {
    return (
        <div className="grow h-full bg-backlight-50 dark:bg-slate-800">
            <div className="h-2 bg-backlight-50 dark:bg-slate-800"></div>
            <Card content="sssss" />
            {/* Comment section  */}
            <div className="mt-4 p-3 min-h-7 flex flex-col bg-white dark:bg-slate-800 rounded-sm  overflow-scroll">
                <div className="cmt flex item-center h-12 p-3 border-t-2">Aluuuuu</div>
                <div className="cmt flex item-center h-12 p-3 border-t-2">Bhalu</div>
            </div>
        </div>
    )
}
export default SinglePost;