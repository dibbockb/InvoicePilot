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
        <footer>
            <div className="py-10 md:px-25 max-w-[75%] mx-auto bg-[#192b3da2] rounded-t-4xl flex flex-col md:flex-row justify-center ">

                {/* footer brand */}
                <div className="flex flex-col justify-center items-center md:justify-center md:items-start">
                    <div onClick={goToTop} className="flex flex-col ">
                        <img src="/assets/icon.svg" alt="footer-icon" className="w-10 mx-auto md:mx-0 pb-1" />
                        <div className="sm:flex-co text-accent text-2xl font-medium md:block group-hover:cursor-pointer">InvoicePilot</div>
                    </div>
                    <br />
                    <p className="max-w-50 md:max-w-75 text-center md:text-left text-subtle">Track clients, invoices, profits—all in one sleek dashboard. Automate the boring, do what you love!</p>
                    <br />
                    <div className="flex gap-4">
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20facebook%20page" target="_blank"><FaFacebook className="shadow-2xl h-6 w-6 hover:scale-105"></FaFacebook></a>
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20instagram%20page" target="_blank"><FaInstagram className="shadow-2xl h-6 w-6 hover:scale-105"></FaInstagram></a>
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20linkedin%20page" target="_blank"> <FaLinkedin className="shadow-2xl h-6 w-6 hover:scale-105"></FaLinkedin></a>
                        <a href="https://www.google.com/search?q=InvoicePilot%20by%20dibbockb%20twitter%20page" target="_blank"><FaXTwitter className="shadow-2xl h-6 w-6 hover:scale-105"></FaXTwitter></a>
                    </div>
                    <br />
                    <button onClick={goToTop} className="flex text-white/75 max-w-fit gap-2 hover:shadow-lg justify-center items-center outline-1 outline-dotted outline-white/20 shadow-2xl rounded-xl w-fit h-10 px-5 hover:bg-accent duration-150 transition-all md:hidden lg:flex"> <FaAngleDoubleUp></FaAngleDoubleUp > Back To Top</button>
                </div>

                {/* footer sitemap */}
                <div className="grid grid-cols-2 mx-auto px-10 py-10 md:flex flex-col justify-center items-center text-center gap-2">
                    <h5 className="flex justify-center items-center text-center">Site Map</h5>
                    <br />
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/"}>Homepage</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/features"}>Features</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/pricing"}>Pricing</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/solutions"}>Solutions</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/about"}>About</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/contact"}>Contact</Link>
                    <Link className="text-white/75 hover:text-white transition-all duration-300" to={"/terms"}>Terms of Service</Link>
                </div>

                {/* footer sub */}
                <section className="flex flex-col justify-center items-center md:items-start gap-2">
                    <p className="pl-2">Subscribe to our newsletter</p>
                    <input type="text" placeholder="Your e-mail" className="bg-white/10 rounded-3xl  shadow-md hover:shadow-lg h-10 max-w-75 lg:w-85 pl-5 transition-all duration-300" />
                    <button onClick={handleSubscribe} className="text-white bg-accent hover:brightness-85 transition-all shadow-md hover:shadow-lg duration-300 h-8 md:h-10 px-5 rounded-xl ">Subscribe</button>
                </section>
            </div>

            <p className="text-white text-center py-2 bg-[#192b3da2]/20 shadow-md hover:shadow-lg max-w-[75%] mx-auto text-[12px]">© 2026 - InvoicePilot. Created by <a href="https://www.dibbockb.com/" target="_blank" className="text-accent"> [.dibbockb]</a></p>
        </footer>
    )
}

export default Footer