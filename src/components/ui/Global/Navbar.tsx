import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/lib/Auth/authStore";
import { supabase } from "@/lib/Auth/supabase";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { LayoutDashboard, LogOut, UserRoundCog } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)


    const { user } = useAuthStore();
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(`Error loggin out :::`, error);
        }
        toast.info(`Logged out!`);
    }

    return (
        <nav className="relative bg-primary px-6 md:px-12 lg:px-40 py-5 grid grid-cols-3 items-center gap-4">
            <div className="justify-self-start">
                <Link to="/" className="flex items-center gap-3 hover:scale-110 transition-all duration-200">
                    <img src="/assets/icon.svg" alt="navbar-icon" className="h-10 w-10" />
                    <div className="text-accent text-2xl font-medium hidden md:block">InvoicePilot</div>
                </Link>
            </div>

            <div className="hidden md:flex items-center justify-center gap-2 text-white  ">
                <NavLink to={"/features"} className="hover:bg-accent/80 flex font-medium justify-center items-center px-3 h-10 rounded transition-all duration-300 text-center">Features</NavLink >
                {user ?
                    <NavLink to={"/dashboard"} className="hover:bg-accent/80 px-14 flex font-medium justify-center items-center w-20 h-10 rounded transition-all duration-300 text-center">Dashboard</NavLink > :
                    <NavLink to={"/pricing"} className="hover:bg-accent/80 flex font-medium justify-center items-center w-20 h-10 rounded transition-all duration-300 text-center">Pricing</NavLink >}
                <NavLink to={"/solutions"} className="hover:bg-accent/80 flex font-medium justify-center items-center w-25 h-10 rounded transition-all duration-300 text-center">Solutions</NavLink >
            </div>


            <div className="justify-self-end flex items-center gap-3">
                <button className="md:hidden text-neutral-300"
                    onClick={() => setisOpen(!isOpen)
                    }>
                    <Menu></Menu>
                </button>
                {user ?
                    <NavigationMenu className="hidden md:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="flex justify-center items-center w-15 h-10 rounded-full transition-all duration-300 ease-in-out bg-[#1E293B] hover:bg-[#1E293B]/40 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="shadow-md hover:shadow-lg border border-white/10 ">
                                    <ul className="grid w-55 gap-1 p-2 bg-primary shadow-2xl rounded-md">
                                        <li className="px-3 py-2 text-white font-semibold border-b border-white/10 mb-1 text-center">
                                            {user?.user_metadata?.username || "Pilot"}
                                        </li>
                                        <li>
                                            <NavigationMenuLink >
                                                <Link to="/dashboard" className="flex items-center gap-2 p-2 text-sm text-white/70 rounded transition-colors hover:bg-accent">
                                                    <LayoutDashboard size={16} /> Dashboard
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink >
                                                <Link to="/profile" className="flex items-center gap-2 p-2 text-sm text-white/70 rounded transition-colors hover:bg-accent">
                                                    <UserRoundCog size={16} /> Profile
                                                </Link>
                                            </NavigationMenuLink>

                                            <NavigationMenuLink >
                                                <button className="flex items-center gap-2 p-2 text-sm text-white/70 rounded transition-colors hover:bg-red-400/60 w-full" onClick={handleLogout} > <LogOut size={16} ></LogOut>Log Out</button>
                                            </NavigationMenuLink>

                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu> :
                    <div className="hidden md:flex gap-3">
                        <Link to={"/login"} className="text-white h-10 hover:shadow-lg font-medium hover:bg-accent/80 flex justify-center items-center rounded w-18 transition-all duration-300">Log In</Link>
                        <Link to={"/onboarding"} className=" text-white font-medium shadow-md hover:shadow-lg bg-accent w-37 h-10 flex justify-center items-center rounded hover:bg-accent/80 duration-300">Start Free Trial</Link></div>}
            </div>

            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-accent text-white rounded-2xl flex flex-col items-center gap-4 py-5 md:hidden z-50 transition-all duration-300 ease-in-out">

                    <NavLink className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded"
                        onClick={() => setisOpen(false)}
                        to="/features">Features</NavLink>


                    {user ? (
                        <NavLink className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded"
                            onClick={() => setisOpen(false)}
                            to="/dashboard">Dashboard</NavLink>
                    ) : (
                        <NavLink className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded"
                            onClick={() => setisOpen(false)}
                            to="/pricing">Pricing</NavLink>
                    )}

                    <NavLink className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded"
                        onClick={() => setisOpen(false)}
                        to="/solutions">Solutions</NavLink>

                    {user ? (
                        <button className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <Link className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded"
                                onClick={() => setisOpen(false)}
                                to="/onboarding">Start Free Trial</Link>
                            <Link className="text-white cursor-pointer hover:bg-primary/50 w-full flex text-center items-center justify-center h-8 rounded"
                                onClick={() => setisOpen(false)}
                                to="/login">Login</Link>
                        </>
                    )}

                </div>
            )}
        </nav>
    )
}
export default Navbar