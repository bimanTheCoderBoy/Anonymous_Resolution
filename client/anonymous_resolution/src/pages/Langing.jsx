import "../style/basic.css"
import { FcGoogle } from "react-icons/fc";
const Landing = () => {
    const loginwithgoogle = () => {
        window.open("/auth/google/callback", "_self")
    }
    return (
        <div className="h-full bg-slate-200 dark:bg-slate-800">
            <div className="text-2xl mt-48 ms-12">Welcome to</div>
            <div className="text-7xl font-bold tracking-wider ms-10 mt-4 animate-bounce headline">Resolux</div>
            <div className="mt-28 text-center">Sign in with</div>
            <div className="mx-auto h-12 w-12 rounded-full bg-white flex items-center justify-center mt-4 animate-spin"><FcGoogle className="text-4xl" onClick={() => loginwithgoogle()} /></div>
            <div className="mt-32 w-72 mx-auto font-semibold tracking-widest text-center quotes">Share your resolutions, spread the positivity, and let's make this year a collective success story.</div>
        </div>
    )
}
export default Landing;