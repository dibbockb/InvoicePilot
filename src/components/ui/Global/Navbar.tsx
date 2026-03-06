
const Navbar = () => {
    return (

        <nav className="bg-[#101922] flex justify-around md:justify-between lg:justify-around h-20 ">
            <div className="flex items-center gap-3">
                <img src="/assets/icon.svg" alt="navbar-icon" className="h-9 w-9" />
                <div className=" text-[#2b8cee] text-2xl font-medium hidden md:block ">InvoicePilot</div>
            </div>

            <div className="items-center gap-2 text-white hidden lg:flex ">
                <button className="hover:bg-[#2B8CEE]/80 block w-22 h-10 rounded transition-all duration-300">Features</button>
                <button className="hover:bg-[#2B8CEE]/80 block w-25 h-10 rounded transition-all duration-300">Solutions</button>
                <button className="hover:bg-[#2B8CEE]/80 block w-20 h-10 rounded transition-all duration-300">Pricing</button>
                <button className="hover:bg-[#2B8CEE]/80 block w-18 h-10 rounded transition-all duration-300">About</button>
            </div>

            <div className="flex justify-center items-center gap-3">
                <button className="text-white h-10 hover:bg-[#2B8CEE]/80 rounded w-18 transition-all duration-300">Log In</button>
                <button className=" text-white bg-[#2B8CEE] w-37 h-10 rounded hover:bg-[#2B8CEE]/80 duration-300">Start Free Trial</button>
            </div>

        </nav>
    )
}
export default Navbar