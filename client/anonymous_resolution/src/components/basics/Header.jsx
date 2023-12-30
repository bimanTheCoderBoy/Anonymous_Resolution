
import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
    return (
        <>
            <div className='bg-primary-50 dark:bg-slate-900 text-black dark:text-stone-50 h-16 flex p-2 justify-center items-center relative shrink-0'>
                <div className="w-11/12 text-xl tracking-widest text-center headline">Resolux</div>
                <DarkThemeToggle className="bg-transparent dark:bg-slate-900 absolute top-3 right-1" />
            </div>
        </>
    )
}
export default Header;