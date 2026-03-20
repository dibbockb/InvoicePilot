import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Global/Navbar";
import Footer from "../components/ui/Global/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}