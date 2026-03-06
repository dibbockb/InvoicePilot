import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (

        <nav className="bg-[#101922] flex px-35 py-5 justify-between items-center ">
            <Link to={"/"} className="flex items-center gap-3 hover:scale-110 transition-all duration-200 ease-in-out">
                <img src="/assets/icon.svg" alt="navbar-icon" className="h-9 w-9 " />
                <div className=" text-accent text-2xl font-medium hidden md:block ">InvoicePilot</div>
            </Link>

            <div className="items-center gap-2 text-white hidden lg:flex ">
                <NavLink to={"/features"} className="hover:bg-accent/80 flex justify-center items-center w-22 h-10 rounded transition-all duration-300 text-center">Features</NavLink >
                <NavLink to={"/solutions"} className="hover:bg-accent/80 flex justify-center items-center w-25 h-10 rounded transition-all duration-300 text-center">Solutions</NavLink >
                <NavLink to={"/pricing"} className="hover:bg-accent/80 flex justify-center items-center w-20 h-10 rounded transition-all duration-300 text-center">Pricing</NavLink >
                <NavLink to={"/about"} className="hover:bg-accent/80 flex justify-center items-center w-18 h-10 rounded transition-all duration-300 text-center">About</NavLink >
            </div>

            <div className="flex justify-center items-center gap-3">
                <Link to={"/login"} className="text-white h-10 hover:bg-accent/80 flex justify-center items-center rounded w-18 transition-all duration-300">Log In</Link>
                <Link to={"/onboarding"} className=" text-white bg-accent w-37 h-10 flex justify-center items-center rounded hover:bg-accent/80 duration-300">Start Free Trial</Link>
            </div>
        </nav>
    )
}
export default Navbar