import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleSubscribe = () => {
        alert("We will let you know!")
    }
    return (
        <footer className=" rounded-t-3xl pt-12 ">
            <div className="w-[87%] mx-auto bg-[#192b3da2] rounded-t-4xl h-110 flex justify-center ">

                {/* footer brand */}
                <div className="flex flex-col justify-center pr-120">
                    <div onClick={goToTop} className="flex flex-col w-fit justify-center items-center">
                        <img src="/assets/icon.svg" alt="navbar-icon" className="h-9 w-9 " />
                        <div className=" text-accent text-2xl font-medium hidden md:block ">InvoicePilot</div>
                    </div>
                    <br />
                    <p className="w-75 text-white/75">Track clients, invoices, profits—all in one sleek dashboard. Automate the boring, do what you love!</p>
                    <br />
                    <div className="flex gap-4">
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20facebook%20page" target="_blank"><FaFacebook className="shadow-2xl h-6 w-6 hover:scale-105"></FaFacebook></a>
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20instagram%20page" target="_blank"><FaInstagram className="shadow-2xl h-6 w-6 hover:scale-105"></FaInstagram></a>
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20linkedin%20page" target="_blank"> <FaLinkedin className="shadow-2xl h-6 w-6 hover:scale-105"></FaLinkedin></a>
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20twitter%20page" target="_blank"><FaXTwitter className="shadow-2xl h-6 w-6 hover:scale-105"></FaXTwitter></a>
                    </div>
                    <br />
                    <button onClick={goToTop} className="flex text-white/75 max-w-fit gap-2 shadow-md hover:shadow-lg justify-center items-center outline-1 outline-dotted outline-white/20 shadow-2xl rounded-xl w-fit h-10 px-5 hover:bg-accent duration-150 transition-all "> <FaAngleDoubleUp></FaAngleDoubleUp> Back To Top</button>
                </div>

                {/* footer sitemap */}
                <div className="flex flex-col justify-center text-left items-start gap-3">
                    <h5>Site Map</h5>
                    <br />
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/"}>Homepage</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/features"}>Features</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/pricing"}>Pricing</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/solutions"}>Solutions</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/about"}>About</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/contact"}>Contact</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" to={"/terms"}>Terms of Service</Link>
                </div>

                {/* footer sub */}
                <section className="flex flex-col justify-center text-left items-start gap-3 pl-25">
                    <p className="pl-2">Subscribe to our newsletter</p>
                    <input type="text" placeholder="Your e-mail" className="bg-white/10 rounded-3xl  shadow-md hover:shadow-lg h-10 w-75 pl-5 transition-all duration-300" />
                    <button onClick={handleSubscribe} className="text-white bg-accent hover:brightness-85 transition-all shadow-md hover:shadow-lg duration-300 h-12 w-fit px-5 rounded-2xl">Subscribe</button>
                </section>
            </div>

            <p className="text-white text-center py-2 bg-[#192b3da2] shadow-md hover:shadow-lg">© 2026 - InvoicePilot. Created by <a href="https://www.dibbockb.com/" target="_blank" className="text-accent"> [.dibbockb]</a></p>
        </footer>
    )
}

export default Footer