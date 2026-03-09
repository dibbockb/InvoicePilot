import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal";

const Hero = () => {
    return (
        <Fade className="py-15">

            <section className="flex justify-center items-start" >
                <div >
                    <div className="flex items-center justify-left px-5 w-fit h-8 gap-1 bg-[#12273b] rounded-2xl">
                        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 9.33333L5.83333 7.55417L8.16667 9.33333L7.29167 6.44583L9.625 4.78333H6.76667L5.83333 1.75L4.9 4.78333H2.04167L4.375 6.44583L3.5 9.33333ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5Z" fill="#2B8CEE" />
                        </svg>
                        <p className="text-[#2b8cee] font-bold">New: AI Expense Categorization</p>
                    </div>
                    <br />

                    <div>
                        <p className="text-[4.5rem] w-160 font-medium leading-20">Master Your
                            Freelance
                            <span className="text-[#2b8cee]"> Business</span> with
                            Ease</p>
                    </div>


                    <p className="text-subtle w-120 pt-8">
                        Track clients, invoices, and profits in one powerful dashboard <br />
                        designed for the modern freelancer.  Automate the boring stuff
                        and focus on what you love!
                    </p>

                    <br />

                    <div className="flex gap-5">
                        <Link to={"/onboarding"} className="flex justify-center items-center gap-2 text-[white] bg-accent hover:bg-accent/80 transition-all duration-300 w-fit h-15 px-5 rounded-xl font-medium shadow-md hover:shadow-lg">Start Free Trial <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
                        </svg>
                        </Link>

                        <Link to={"/demo"} className="flex justify-center items-center gap-2 text-[white] bg-[#1e293b] hover:bg-[#1e293b]/80 w-fit h-15 px-5 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">Watch Live Demo <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 14.5L14.5 10L7.5 5.5V14.5ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#F1F5F9" />
                        </svg>
                        </Link>
                    </div>
                    <br />
                    <div>
                        <div className="flex items-center justify-left w-fit h-8 gap-1  rounded-2xl">
                            <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.01667 8.51667L9.12917 4.40417L8.3125 3.5875L5.01667 6.88333L3.35417 5.22083L2.5375 6.0375L5.01667 8.51667ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5Z" fill="#10B981" />
                            </svg>
                            <p className="text-subtle font-medium">No credit card required. 14-day free trial.</p>
                        </div></div>

                </div>

                <img src="/assets/hero-dashboard.png" className="hidden lg:block rounded-2xl w-250" alt="hero-image-dashboard" />
            </section>
            <br />

            <div className="flex flex-col justify-center items-center py-10  bg-secondary ">
                <p className="text-subtle tracking-wide text-xl font-medium">Trusted by 10,000+ Freelancers & Remote Teams</p>
                {/* //companies */}
                <br />
                <div className="flex gap-15 items-center">
                    <div className="flex gap-1 items-center">
                        <svg width="30" height="30" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.95 10.3C0.65 9.7 0.416667 9.09167 0.25 8.475C0.0833333 7.85833 0 7.23333 0 6.6C0 4.73333 0.633333 3.16667 1.9 1.9C3.16667 0.633333 4.73333 0 6.6 0C7.65 0 8.65 0.220833 9.6 0.6625C10.55 1.10417 11.35 1.71667 12 2.5C12.65 1.71667 13.45 1.10417 14.4 0.6625C15.35 0.220833 16.35 0 17.4 0C19.2667 0 20.8333 0.633333 22.1 1.9C23.3667 3.16667 24 4.73333 24 6.6C24 7.23333 23.9167 7.85833 23.75 8.475C23.5833 9.09167 23.35 9.7 23.05 10.3C22.8667 9.98333 22.65 9.7 22.4 9.45C22.15 9.2 21.8583 9 21.525 8.85C21.675 8.46667 21.7917 8.09167 21.875 7.725C21.9583 7.35833 22 6.98333 22 6.6C22 5.3 21.5583 4.20833 20.675 3.325C19.7917 2.44167 18.7 2 17.4 2C16.05 2 15.0125 2.37083 14.2875 3.1125C13.5625 3.85417 12.8 4.68333 12 5.6C11.2 4.66667 10.4375 3.83333 9.7125 3.1C8.9875 2.36667 7.95 2 6.6 2C5.3 2 4.20833 2.44167 3.325 3.325C2.44167 4.20833 2 5.3 2 6.6C2 6.98333 2.04167 7.35833 2.125 7.725C2.20833 8.09167 2.325 8.46667 2.475 8.85C2.14167 9 1.85 9.2 1.6 9.45C1.35 9.7 1.13333 9.98333 0.95 10.3ZM0 19V17.425C0 16.6917 0.370833 16.1042 1.1125 15.6625C1.85417 15.2208 2.81667 15 4 15C4.21667 15 4.425 15.0042 4.625 15.0125C4.825 15.0208 5.01667 15.0417 5.2 15.075C4.96667 15.4083 4.79167 15.7667 4.675 16.15C4.55833 16.5333 4.5 16.9417 4.5 17.375V19H0ZM6 19V17.375C6 16.2917 6.55417 15.4167 7.6625 14.75C8.77083 14.0833 10.2167 13.75 12 13.75C13.8 13.75 15.25 14.0833 16.35 14.75C17.45 15.4167 18 16.2917 18 17.375V19H6ZM19.5 19V17.375C19.5 16.9417 19.4458 16.5333 19.3375 16.15C19.2292 15.7667 19.0667 15.4083 18.85 15.075C19.0333 15.0417 19.2208 15.0208 19.4125 15.0125C19.6042 15.0042 19.8 15 20 15C21.2 15 22.1667 15.2208 22.9 15.6625C23.6333 16.1042 24 16.6917 24 17.425V19H19.5ZM12 15.75C11.05 15.75 10.2 15.875 9.45 16.125C8.7 16.375 8.25833 16.6667 8.125 17H15.9C15.75 16.6667 15.3042 16.375 14.5625 16.125C13.8208 15.875 12.9667 15.75 12 15.75ZM4 14C3.45 14 2.97917 13.8042 2.5875 13.4125C2.19583 13.0208 2 12.55 2 12C2 11.4333 2.19583 10.9583 2.5875 10.575C2.97917 10.1917 3.45 10 4 10C4.56667 10 5.04167 10.1917 5.425 10.575C5.80833 10.9583 6 11.4333 6 12C6 12.55 5.80833 13.0208 5.425 13.4125C5.04167 13.8042 4.56667 14 4 14ZM20 14C19.45 14 18.9792 13.8042 18.5875 13.4125C18.1958 13.0208 18 12.55 18 12C18 11.4333 18.1958 10.9583 18.5875 10.575C18.9792 10.1917 19.45 10 20 10C20.5667 10 21.0417 10.1917 21.425 10.575C21.8083 10.9583 22 11.4333 22 12C22 12.55 21.8083 13.0208 21.425 13.4125C21.0417 13.8042 20.5667 14 20 14ZM12 13C11.1667 13 10.4583 12.7083 9.875 12.125C9.29167 11.5417 9 10.8333 9 10C9 9.15 9.29167 8.4375 9.875 7.8625C10.4583 7.2875 11.1667 7 12 7C12.85 7 13.5625 7.2875 14.1375 7.8625C14.7125 8.4375 15 9.15 15 10C15 10.8333 14.7125 11.5417 14.1375 12.125C13.5625 12.7083 12.85 13 12 13ZM12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9Z" fill="#2B8CEE" />
                        </svg>
                        <h6 className="text-2xl font-bold text-subtle">TeamFlow</h6>
                    </div>

                    <div className="flex gap-1 items-center">
                        <svg width="30" height="30" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 16C3.98333 16 2.6875 15.475 1.6125 14.425C0.5375 13.375 0 12.0917 0 10.575C0 9.275 0.391667 8.11667 1.175 7.1C1.95833 6.08333 2.98333 5.43333 4.25 5.15C4.66667 3.61667 5.5 2.375 6.75 1.425C8 0.475 9.41667 0 11 0C12.95 0 14.6042 0.679167 15.9625 2.0375C17.3208 3.39583 18 5.05 18 7C19.15 7.13333 20.1042 7.62917 20.8625 8.4875C21.6208 9.34583 22 10.35 22 11.5C22 12.75 21.5625 13.8125 20.6875 14.6875C19.8125 15.5625 18.75 16 17.5 16H5.5ZM5.5 14H17.5C18.2 14 18.7917 13.7583 19.275 13.275C19.7583 12.7917 20 12.2 20 11.5C20 10.8 19.7583 10.2083 19.275 9.725C18.7917 9.24167 18.2 9 17.5 9H16V7C16 5.61667 15.5125 4.4375 14.5375 3.4625C13.5625 2.4875 12.3833 2 11 2C9.61667 2 8.4375 2.4875 7.4625 3.4625C6.4875 4.4375 6 5.61667 6 7H5.5C4.53333 7 3.70833 7.34167 3.025 8.025C2.34167 8.70833 2 9.53333 2 10.5C2 11.4667 2.34167 12.2917 3.025 12.975C3.70833 13.6583 4.53333 14 5.5 14Z" fill="#2B8CEE" />
                        </svg>

                        <h6 className="text-2xl font-bold text-subtle">SkyLink</h6>
                    </div>

                    <div className="flex gap-1 items-center">
                        <svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.4 14.5923C1.65 13.8423 1.0625 12.9756 0.6375 11.9923C0.2125 11.009 0 9.99231 0 8.94231C0 7.89231 0.2 6.85481 0.6 5.82981C1 4.80481 1.65 3.84231 2.55 2.94231C3.13333 2.35897 3.85417 1.85897 4.7125 1.44231C5.57083 1.02564 6.5875 0.696474 7.7625 0.454808C8.9375 0.213141 10.2792 0.0673077 11.7875 0.0173077C13.2958 -0.0326923 14.9833 0.025641 16.85 0.192308C16.9833 1.95897 17.025 3.58397 16.975 5.06731C16.925 6.55064 16.7875 7.88814 16.5625 9.07981C16.3375 10.2715 16.0208 11.3131 15.6125 12.2048C15.2042 13.0965 14.7 13.8423 14.1 14.4423C13.2167 15.3256 12.2792 15.9715 11.2875 16.3798C10.2958 16.7881 9.28333 16.9923 8.25 16.9923C7.16667 16.9923 6.10833 16.7798 5.075 16.3548C4.04167 15.9298 3.15 15.3423 2.4 14.5923ZM5.2 14.1923C5.68333 14.4756 6.17917 14.6798 6.6875 14.8048C7.19583 14.9298 7.71667 14.9923 8.25 14.9923C9.01667 14.9923 9.775 14.8381 10.525 14.5298C11.275 14.2215 11.9917 13.7256 12.675 13.0423C12.975 12.7423 13.2792 12.3215 13.5875 11.7798C13.8958 11.2381 14.1625 10.5298 14.3875 9.65481C14.6125 8.77981 14.7833 7.72147 14.9 6.47981C15.0167 5.23814 15.0333 3.75897 14.95 2.04231C14.1333 2.00897 13.2125 1.99647 12.1875 2.00481C11.1625 2.01314 10.1417 2.09231 9.125 2.24231C8.10833 2.39231 7.14167 2.63397 6.225 2.96731C5.30833 3.30064 4.55833 3.75897 3.975 4.34231C3.225 5.09231 2.70833 5.83397 2.425 6.56731C2.14167 7.30064 2 8.00897 2 8.69231C2 9.67564 2.1875 10.5381 2.5625 11.2798C2.9375 12.0215 3.26667 12.5423 3.55 12.8423C4.25 11.509 5.175 10.2298 6.325 9.00481C7.475 7.77981 8.81667 6.77564 10.35 5.99231C9.15 7.04231 8.10417 8.22981 7.2125 9.55481C6.32083 10.8798 5.65 12.4256 5.2 14.1923Z" fill="#2B8CEE" />
                        </svg>


                        <h6 className="text-2xl font-bold text-subtle">GreenHub</h6>
                    </div>

                    <div className="flex gap-1 items-center">
                        <svg width="30" height="30" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.55 16.2L11.725 10H7.725L8.45 4.325L3.825 11H7.3L6.55 16.2ZM4 20L5 13H0L9 0H11L10 8H16L6 20H4Z" fill="#2B8CEE" />
                        </svg>

                        <h6 className="text-2xl font-bold text-subtle">Spark</h6>
                    </div>

                    <div className="flex gap-">
                        <svg width="30" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 19.05L0 12.05L1.65 10.8L9 16.5L16.35 10.8L18 12.05L9 19.05ZM9 14L0 7L9 0L18 7L9 14ZM9 11.45L14.75 7L9 2.55L3.25 7L9 11.45Z" fill="#2B8CEE" />
                        </svg>

                        <h6 className="text-2xl font-bold text-subtle">Stacked</h6>
                    </div>
                </div>
            </div>

            <div className="bg-primary flex flex-col items-center">

                <h3 className="text-[4rem] font-medium pt-10">Everything you need to grow</h3>
                <p className="text-subtle text-xl w-125 text-center pt-5">Focus on your craft while we handle the heavy lifting of running a freelance
                    business.</p>

                <div className="grid grid-rows-2 grid-cols-3 gap-8 py-15">
                    {/* //card */}
                    <div className="bg-secondary w-fit py-10 px-10   rounded-xl outline-1 outline-subtle/40 shadow-xl hover:outline-accent/80 duration-300 transition-all">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2B8CEE" fill-opacity="0.1" />
                            <path d="M13 32V29.2C13 28.6333 13.1458 28.1125 13.4375 27.6375C13.7292 27.1625 14.1167 26.8 14.6 26.55C15.6333 26.0333 16.6833 25.6458 17.75 25.3875C18.8167 25.1292 19.9 25 21 25C22.1 25 23.1833 25.1292 24.25 25.3875C25.3167 25.6458 26.3667 26.0333 27.4 26.55C27.8833 26.8 28.2708 27.1625 28.5625 27.6375C28.8542 28.1125 29 28.6333 29 29.2V32H13ZM31 32V29C31 28.2667 30.7958 27.5625 30.3875 26.8875C29.9792 26.2125 29.4 25.6333 28.65 25.15C29.5 25.25 30.3 25.4208 31.05 25.6625C31.8 25.9042 32.5 26.2 33.15 26.55C33.75 26.8833 34.2083 27.2542 34.525 27.6625C34.8417 28.0708 35 28.5167 35 29V32H31ZM21 24C19.9 24 18.9583 23.6083 18.175 22.825C17.3917 22.0417 17 21.1 17 20C17 18.9 17.3917 17.9583 18.175 17.175C18.9583 16.3917 19.9 16 21 16C22.1 16 23.0417 16.3917 23.825 17.175C24.6083 17.9583 25 18.9 25 20C25 21.1 24.6083 22.0417 23.825 22.825C23.0417 23.6083 22.1 24 21 24ZM31 20C31 21.1 30.6083 22.0417 29.825 22.825C29.0417 23.6083 28.1 24 27 24C26.8167 24 26.5833 23.9792 26.3 23.9375C26.0167 23.8958 25.7833 23.85 25.6 23.8C26.05 23.2667 26.3958 22.675 26.6375 22.025C26.8792 21.375 27 20.7 27 20C27 19.3 26.8792 18.625 26.6375 17.975C26.3958 17.325 26.05 16.7333 25.6 16.2C25.8333 16.1167 26.0667 16.0625 26.3 16.0375C26.5333 16.0125 26.7667 16 27 16C28.1 16 29.0417 16.3917 29.825 17.175C30.6083 17.9583 31 18.9 31 20ZM15 30H27V29.2C27 29.0167 26.9542 28.85 26.8625 28.7C26.7708 28.55 26.65 28.4333 26.5 28.35C25.6 27.9 24.6917 27.5625 23.775 27.3375C22.8583 27.1125 21.9333 27 21 27C20.0667 27 19.1417 27.1125 18.225 27.3375C17.3083 27.5625 16.4 27.9 15.5 28.35C15.35 28.4333 15.2292 28.55 15.1375 28.7C15.0458 28.85 15 29.0167 15 29.2V30ZM21 22C21.55 22 22.0208 21.8042 22.4125 21.4125C22.8042 21.0208 23 20.55 23 20C23 19.45 22.8042 18.9792 22.4125 18.5875C22.0208 18.1958 21.55 18 21 18C20.45 18 19.9792 18.1958 19.5875 18.5875C19.1958 18.9792 19 19.45 19 20C19 20.55 19.1958 21.0208 19.5875 21.4125C19.9792 21.8042 20.45 22 21 22Z" fill="#2B8CEE" />
                        </svg>
                        <br />
                        <h6 className="text-[1.3rem] font-medium">Client Management</h6>
                        <p className="text-subtle font-medium pt-2 w-75">Keep all client details, communication
                            history, and contracts in one secure vault.</p>
                    </div>

                    {/* //card */}
                    <div className="bg-secondary w-fit py-10 px-10   rounded-xl outline-1 outline-subtle/40 shadow-xl hover:outline-accent/80 duration-300 transition-all">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2B8CEE" fill-opacity="0.1" />
                            <path d="M28.4 33.5L27 32.1L28.575 30.5L27 28.925L28.4 27.5L30 29.1L31.575 27.5L33 28.925L31.4 30.5L33 32.1L31.575 33.5L30 31.925L28.4 33.5ZM18 31.5C18.2833 31.5 18.5208 31.4042 18.7125 31.2125C18.9042 31.0208 19 30.7833 19 30.5C19 30.2167 18.9042 29.9792 18.7125 29.7875C18.5208 29.5958 18.2833 29.5 18 29.5C17.7167 29.5 17.4792 29.5958 17.2875 29.7875C17.0958 29.9792 17 30.2167 17 30.5C17 30.7833 17.0958 31.0208 17.2875 31.2125C17.4792 31.4042 17.7167 31.5 18 31.5ZM18 33.5C17.1667 33.5 16.4583 33.2083 15.875 32.625C15.2917 32.0417 15 31.3333 15 30.5C15 29.6667 15.2917 28.9583 15.875 28.375C16.4583 27.7917 17.1667 27.5 18 27.5C18.6167 27.5 19.1792 27.6708 19.6875 28.0125C20.1958 28.3542 20.5667 28.8167 20.8 29.4C21.45 29.2167 21.9792 28.8583 22.3875 28.325C22.7958 27.7917 23 27.1833 23 26.5V22.5C23 21.1167 23.4875 19.9375 24.4625 18.9625C25.4375 17.9875 26.6167 17.5 28 17.5H29.15L27.575 15.925L29 14.5L33 18.5L29 22.5L27.575 21.1L29.15 19.5H28C27.1667 19.5 26.4583 19.7917 25.875 20.375C25.2917 20.9583 25 21.6667 25 22.5V26.5C25 27.7167 24.6083 28.7875 23.825 29.7125C23.0417 30.6375 22.05 31.2083 20.85 31.425C20.65 32.0417 20.2875 32.5417 19.7625 32.925C19.2375 33.3083 18.65 33.5 18 33.5ZM16.4 21.5L15 20.1L16.575 18.5L15 16.925L16.4 15.5L18 17.1L19.575 15.5L21 16.925L19.4 18.5L21 20.1L19.575 21.5L18 19.925L16.4 21.5Z" fill="#2B8CEE" />
                        </svg>
                        <br />
                        <h6 className="text-[1.3rem] font-medium">Project Tracking</h6>
                        <p className="text-subtle font-medium pt-2 w-75">Manage multiple projects with milestones,
                            deadlines, and time-tracking features built-
                            in.</p>
                    </div>

                    {/* //card */}
                    <div className="bg-secondary w-fit py-10 px-10   rounded-xl outline-1 outline-subtle/40 shadow-xl hover:outline-accent/80 duration-300 transition-all">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2B8CEE" fill-opacity="0.1" />
                            <path d="M20 30H28V28H20V30ZM20 26H28V24H20V26ZM18 34C17.45 34 16.9792 33.8042 16.5875 33.4125C16.1958 33.0208 16 32.55 16 32V16C16 15.45 16.1958 14.9792 16.5875 14.5875C16.9792 14.1958 17.45 14 18 14H26L32 20V32C32 32.55 31.8042 33.0208 31.4125 33.4125C31.0208 33.8042 30.55 34 30 34H18ZM25 21V16H18V32H30V21H25ZM18 16V21V16V21V32V16Z" fill="#2B8CEE" />
                        </svg>
                        <br />
                        <h6 className="text-[1.3rem] font-medium">Smart Invoicing</h6>
                        <p className="text-subtle font-medium pt-2 w-75">Create professional, branded invoices in
                            seconds. Auto-send recurring bills to
                            regular clients.</p>
                    </div>

                    {/* //card */}
                    <div className="bg-secondary w-fit py-10 px-10   rounded-xl outline-1 outline-subtle/40 shadow-xl hover:outline-accent/80 duration-300 transition-all">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2B8CEE" fill-opacity="0.1" />
                            <path d="M26 25C25.1667 25 24.4583 24.7083 23.875 24.125C23.2917 23.5417 23 22.8333 23 22C23 21.1667 23.2917 20.4583 23.875 19.875C24.4583 19.2917 25.1667 19 26 19C26.8333 19 27.5417 19.2917 28.125 19.875C28.7083 20.4583 29 21.1667 29 22C29 22.8333 28.7083 23.5417 28.125 24.125C27.5417 24.7083 26.8333 25 26 25ZM19 28C18.45 28 17.9792 27.8042 17.5875 27.4125C17.1958 27.0208 17 26.55 17 26V18C17 17.45 17.1958 16.9792 17.5875 16.5875C17.9792 16.1958 18.45 16 19 16H33C33.55 16 34.0208 16.1958 34.4125 16.5875C34.8042 16.9792 35 17.45 35 18V26C35 26.55 34.8042 27.0208 34.4125 27.4125C34.0208 27.8042 33.55 28 33 28H19ZM21 26H31C31 25.45 31.1958 24.9792 31.5875 24.5875C31.9792 24.1958 32.45 24 33 24V20C32.45 20 31.9792 19.8042 31.5875 19.4125C31.1958 19.0208 31 18.55 31 18H21C21 18.55 20.8042 19.0208 20.4125 19.4125C20.0208 19.8042 19.55 20 19 20V24C19.55 24 20.0208 24.1958 20.4125 24.5875C20.8042 24.9792 21 25.45 21 26ZM32 32H15C14.45 32 13.9792 31.8042 13.5875 31.4125C13.1958 31.0208 13 30.55 13 30V19H15V30H32V32ZM19 26V18V26Z" fill="#2B8CEE" />
                        </svg>
                        <br />
                        <h6 className="text-[1.3rem] font-medium">Payment Monitoring</h6>
                        <p className="text-subtle font-medium pt-2 w-75">Get notified when invoices are viewed and
                            paid. Support for 100+ global currencies..</p>
                    </div>

                    {/* //card */}
                    <div className="bg-secondary w-fit py-10 px-10   rounded-xl outline-1 outline-subtle/40 shadow-xl hover:outline-accent/80 duration-300 transition-all">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2B8CEE" fill-opacity="0.1" />
                            <path d="M15.625 26.525L14 25.35L19 17.35L22 20.85L26 14.35L29 18.85L32.375 13.5L34 14.675L29.05 22.525L26.075 18.05L22.275 24.225L19.25 20.7L15.625 26.525ZM27.5 30.5C28.2 30.5 28.7917 30.2583 29.275 29.775C29.7583 29.2917 30 28.7 30 28C30 27.3 29.7583 26.7083 29.275 26.225C28.7917 25.7417 28.2 25.5 27.5 25.5C26.8 25.5 26.2083 25.7417 25.725 26.225C25.2417 26.7083 25 27.3 25 28C25 28.7 25.2417 29.2917 25.725 29.775C26.2083 30.2583 26.8 30.5 27.5 30.5ZM32.6 34.5L29.9 31.8C29.55 32.0333 29.1708 32.2083 28.7625 32.325C28.3542 32.4417 27.9333 32.5 27.5 32.5C26.25 32.5 25.1875 32.0625 24.3125 31.1875C23.4375 30.3125 23 29.25 23 28C23 26.75 23.4375 25.6875 24.3125 24.8125C25.1875 23.9375 26.25 23.5 27.5 23.5C28.75 23.5 29.8125 23.9375 30.6875 24.8125C31.5625 25.6875 32 26.75 32 28C32 28.4333 31.9417 28.8542 31.825 29.2625C31.7083 29.6708 31.5333 30.05 31.3 30.4L34 33.1L32.6 34.5Z" fill="#2B8CEE" />
                        </svg>
                        <br />
                        <h6 className="text-[1.3rem] font-medium">Income Analytics</h6>
                        <p className="text-subtle font-medium pt-2 w-75">Visualize your earnings with intuitive charts.
                            See exactly where your money is coming
                            from.</p>
                    </div>

                    {/* //card */}
                    <div className="bg-secondary w-fit py-10 px-10   rounded-xl outline-1 outline-subtle/40 shadow-xl hover:outline-accent/80 duration-300 transition-all">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#2B8CEE" fill-opacity="0.1" />
                            <path d="M15.4 30L14 28.6L21.4 21.15L25.4 25.15L30.6 20H28V18H34V24H32V21.4L25.4 28L21.4 24L15.4 30Z" fill="#2B8CEE" />
                        </svg>
                        <br />
                        <h6 className="text-[1.3rem] font-medium">Profit Trends</h6>
                        <p className="text-subtle font-medium pt-2 w-75">Track your business growth over time.
                            Identify your most profitable service
                            offerings.</p>
                    </div>
                </div>

            </div>

            <div className="flex items-center px-35 pr-18 pt-10">
                <div className="flex flex-col justify-between items-start ">
                    <h3 className="text-[4rem] font-medium leading-18">Your entire office, <span className="text-blue-500">In One
                        Place!</span></h3>

                    <p className="w-140 text-subtle font-medium text-xl pt-8">Stop jumping between tools. InvoicePilot brings together everything
                        from lead generation to tax reporting in a clean, unified interface.</p>
                    <div className="flex flex-col pt-5">
                        <div><div className="flex gap-2 items-center">
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="18.4417" height="15.9625" rx="7.98125" fill="#2B8CEE" fill-opacity="0.1" />
                                <path d="M7.79167 11.9625L4 8.17083L5.3125 6.85833L7.79167 9.3375L13.1292 4L14.4417 5.3125L7.79167 11.9625Z" fill="#2B8CEE" />
                            </svg>
                            <p className="font-semibold">Unified Sidebar Navigation</p>
                        </div>
                            <div className="flex gap-2 items-center">

                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18.4417" height="15.9625" rx="7.98125" fill="#2B8CEE" fill-opacity="0.1" />
                                    <path d="M7.79167 11.9625L4 8.17083L5.3125 6.85833L7.79167 9.3375L13.1292 4L14.4417 5.3125L7.79167 11.9625Z" fill="#2B8CEE" />
                                </svg>
                                <p className="font-semibold">Context-Aware Data Cards</p>
                            </div>

                            <div className="flex gap-2 items-center">

                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18.4417" height="15.9625" rx="7.98125" fill="#2B8CEE" fill-opacity="0.1" />
                                    <path d="M7.79167 11.9625L4 8.17083L5.3125 6.85833L7.79167 9.3375L13.1292 4L14.4417 5.3125L7.79167 11.9625Z" fill="#2B8CEE" />
                                </svg>
                                <p className="font-semibold">Real-time Activity Feed</p>
                            </div>

                        </div></div>
                </div>

                <img src="assets/dash-preview.png" alt="features-dashboard-preview" className="h-100% w-250 " />
            </div>

            {/* cta */}
            <div className="bg-[#2b8cee] rounded-2xl flex flex-col items-center text-center px-25 py-25 w-fit justify-self-center shadow-md hover:shadow-lg">
                <h1 className="text-white text-[4rem] font-medium leading-18 ">Ready to send your first invoice?</h1>

                <p className="text-white text-center w-150 font-medium text-xl pt-3">Join over 10,000 freelancers who are building more profitable, less
                    stressful businesses with InvoicePilot.</p>

                <div className="flex gap-5 pt-6">
                    <Link to={"/onboarding"} className="flex justify-center items-center gap-2 text-black bg-white hover:bg-white/80 transition-all duration-300 w-fit h-15 px-5 outline-1 outline-white  rounded-xl font-medium shadow-md hover:shadow-lg">Create Free Invoice<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="black" />
                    </svg>
                    </Link>

                    <Link to={"/demo"} className="flex justify-center items-center gap-2 bg-[#4097f0] outline-1 outline-white hover:bg-white duration-500 ease-in-out w-fit h-15 px-5 rounded-xl text-white font-medium hover:text-black shadow-md hover:shadow-lg transition-all ">Schedule a Demo
                    </Link>
                </div>
            </div>
        </Fade>
    )
}



export default Hero