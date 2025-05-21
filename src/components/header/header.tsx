import { Link } from "react-router"
import { HeaderActions } from "./header-actions"
import { FaRegMoon } from "react-icons/fa"
import { useTheme } from "@/context/theme-context";
import { MdSunny } from "react-icons/md";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    // return jsx
    return (
        <header className="py-4">
            <div className="container mx-auto flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">TaskFlow-ReactJs</h1>
                    <Link to="/" className="link link-hover btn btn-outline btn-primary">Home</Link>
                    <button className="btn btn-soft btn-primary" onClick={toggleTheme}>
                        {theme === "light" ? <FaRegMoon size={22} /> : <MdSunny size={22} />}
                    </button>
                </div>
                <HeaderActions />
            </div>
        </header>
    )
}
