import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
const getResApi="http://localhost:8001/resolution/getresolutions/"
import { MdDownloading } from "react-icons/md";
const Home = ({userId}) => {
    const [resolutions, addResolutions]=useState([]);
    function mapRes(obj){
        this.content=obj._doc.data.resolutions,
        this.createdAt=obj._doc.createdAt, 
        this.id=obj._doc._id, 
        this.userId=userId, 
        this.isLiked=obj.isLiked, 
        this.isSaved=obj.isSaved
    }

    const getResoluations=async()=>{
        const resolution=await axios.get(getResApi+userId+'/'+resolutions.length,{withCredentials:true});
        const gotRes=resolution.data.resolutions;
        const formattedRes=gotRes.map((obj)=>{
            return new mapRes(obj);
        })
        console.log(formattedRes);

        addResolutions([...resolutions,...formattedRes])
    }
    useEffect(()=>{
        getResoluations();
    },[])
    return (
        <div className="grow flex flex-col gap-4 bg-backlight-50  dark:bg-slate-700">
        {
            resolutions.map((ele,i)=>{
                return <div className="flex flex-col relative" key={i}>
                                <Card content={ele.content} id={ele.id} createdAt={ele.createdAt} isSaved={ele.isSaved} isLiked={ele.isLiked} userId={userId} />
                            </div>

                  
            })
        }
        <div onClick={()=>{getResoluations()}} className="scale-125 cursor-pointer pb-2 text-blue-500 w-screen flex justify-center items-center">
        <MdDownloading />  loadmore
        </div>
        </div>
    )
}
export default Home;

