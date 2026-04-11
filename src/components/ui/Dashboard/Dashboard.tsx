import { Bolt, LayoutDashboard, Scroll, Users } from "lucide-react"
import { NavLink } from "react-router-dom"

const Dashboard = () => {
    return (
        <main className="flex flex-col lg:flex-row h-screen overflow-hidden">
            <aside className="flex justify-center lg:flex-col lg:justify-start py-3 bg-[#0F172A] min-h-15 lg:min-h-screen lg:min-w-xs lg:px-4">

                <div className="hidden lg:flex justify-center items-center">logo here</div>

                <NavLink to={"/path"} className=" flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-4 p-3">
                    <LayoutDashboard></LayoutDashboard>
                    <p className="font-medium">Dashboard</p>
                </NavLink>

                <NavLink to={"/path"} className=" flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-4 p-3">
                    <Scroll></Scroll>
                    <p className="font-medium">Invoices</p>
                </NavLink>

                <NavLink to={"/path"} className=" flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-4 p-3">
                    <Users></Users>
                    <p className="font-medium">Clients</p>
                </NavLink>

                <NavLink to={"/path"} className="flex flex-col lg:flex-row lg:gap-2 items-center lg:h-15 bg-[#0F172A] hover:bg-[#132147] rounded-xl transition-all duration-300 ease-in-out text-gray-300 hover:text-[#60A5FA] lg:px-4 p-3">
                    <Bolt></Bolt>
                    <p className="font-medium">Settings</p>
                </NavLink>

            </aside>
        </main>

    )
}

export default Dashboard