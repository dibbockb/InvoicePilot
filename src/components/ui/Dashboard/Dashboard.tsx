import { Bolt, LayoutDashboard, Scroll, Users } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Link, NavLink } from "react-router-dom"

const Dashboard = () => {
    return (
        <AnimatePresence>
            <motion.main
                initial={{ opacity:0, filter: "blur(15px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.60, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row h-screen overflow-hidden">
                <motion.aside
                    initial={{ x: -20, filter: "blur(5px)" }}
                    animate={{ x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.50, ease: "easeInOut" }}
                    className="flex justify-center lg:flex-col lg:justify-start py-3 bg-[#0F172A] min-h-15 lg:min-h-screen lg:w-xs lg:px-4
            fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl">

                    <Link to={"/"} className="hidden lg:flex px-4 pt-4 mx-auto hover:scale-105 transition-all duration-300 ease-in-out">
                        <div className="flex flex-col relative">
                            <Link to="/" className="flex gap-3 hover:scale-110 transition-all duration-200">
                                <img src="/assets/icon.png" alt="navbar-icon" className="size-10" />
                                <div className="text-accent text-2xl font-medium hidden md:block">InvoicePilot</div>
                            </Link>
                            <p className="font-medium text-gray-400 absolute pl-13 pt-9 text-xs">Billing Made Easy!</p>
                        </div>
                    </Link>


                    <div className="navlinks lg:pt-10 flex lg:flex-col">
                        <NavLink to={"/dashboard"} className="flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-13 p-3">
                            <LayoutDashboard></LayoutDashboard>
                            <p className="font-medium">Dashboard</p>
                        </NavLink>

                        <NavLink to={"/dashboard/invoices"} className=" flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-13 p-3">
                            <Scroll></Scroll>
                            <p className="font-medium">Invoices</p>
                        </NavLink>

                        <NavLink to={"/dashboard/clients"} className=" flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-13 p-3">
                            <Users></Users>
                            <p className="font-medium">Clients</p>
                        </NavLink>

                        <NavLink to={"/dashboard/settings"} className="flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-13 p-3">
                            <Bolt></Bolt>
                            <p className="font-medium">Settings</p>
                        </NavLink>
                    </div>

                </motion.aside>
            </motion.main>
        </AnimatePresence>

    )
}

export default Dashboard