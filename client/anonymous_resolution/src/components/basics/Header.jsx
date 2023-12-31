
import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
    return (
        <>
            <div className='sticky z-10 top-0 left-0 right-0 bg-primary-50 dark:bg-slate-900 text-black dark:text-stone-50 h-16 flex p-2 justify-center items-center shrink-0'>
                <div className=" font-sans text-xl font-bold dark:text-primary-50 tracking-widest text-center heading">Resoluxe</div>
                <DarkThemeToggle className="bg-transparent dark:bg-slate-900 absolute top-3 right-1" />
            </div>
        </>
    )
}
export default Header;