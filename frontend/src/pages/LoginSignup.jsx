import { Link, Outlet, useLocation } from "react-router-dom";
import img from "../assets/Note_Taking.png"

function LoginSignup() {

    const location = useLocation();

    return (
        <div className="grid grid-cols-2 min-h-screen">
            
            {/* ...left section... */}
            <div className="hidden lg:flex lg:col-span-1 flex-col justify-center gap-6 bg-[#f8f9ff] px-16">

                <h1 className="text-[38px] font-bold text-[#111827] text-left">
                    Peblo Notes ✨
                </h1>
                <img src={img} alt="Notes Illustration" className="mt-3 w-60 self-center"/>

                <div>
                    <h2 className="mt-2 text-[30px]  font-bold text-[#111827] text-center">
                        Welcome to Peblo Notes
                    </h2>
                    <p className="text-lg text-gray-600 leading-9 text-center">
                        Your smart space to write, organize, and simplify your ideas with AI.
                    </p>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8c8d7]">
                        📄
                    </div>
                    <div>
                        <h3 className="text-[16px] font-semibold text-[#111827]">
                            Smart Summaries
                        </h3>
                        <p className="text-[14px] text-gray-600">
                            Summarize notes and content instantly with AI.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d1fae5]">
                        🏷️
                    </div>
                    <div>
                        <h3 className="text-[16px] font-semibold text-[#111827]">
                            Organized Effortlessly
                        </h3>
                        <p className="text-[14px] text-gray-600">
                            Use tags and categories to keep everything in place.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffedd5]">
                        📊
                    </div>
                    <div>
                        <h3 className="text-[16px] font-semibold text-[#111827]">
                            Boost Productivity
                        </h3>
                        <p className="text-[14px] text-gray-600">
                            Focus on what matters while AI takes care of the rest.
                        </p>
                    </div>
                </div>
            </div>

            {/* ...Right Section... */}
            <div className="col-span-5 lg:col-span-1 flex justify-center bg-white px-6 py-12">

                <div className="w-full max-w-155">

                    <div className="grid grid-cols-2 border border-[#e4e7ec] rounded-lg overflow-hidden">

                        <Link to="/login-signup/login" className={`py-4 text-center text-[18px] font-semibold border-b-2 transition-all ${
                            location.pathname === "/login-signup/login" || location.pathname === "/login-signup" 
                            ? "border-[#4f2cff] text-[#4f2cff] bg-[#f8f9ff]"
                            : "border-transparent text-[#667085]" }`
                        }> Login </Link>

                        <Link to="/login-signup/signup" className={`py-4 text-center text-[18px] font-semibold border-b-2 transition-all 
                            ${location.pathname === "/login-signup/signup"
                            ? "border-[#4f2cff] text-[#4f2cff] bg-[#f8f9ff]"
                            : "border-transparent text-[#667085]"}`
                        }>Sign Up</Link>
                    </div>

                    <div>
                        <Outlet />
                    </div>
                   

                </div>

            </div>
        </div>
    );
}

export default LoginSignup;