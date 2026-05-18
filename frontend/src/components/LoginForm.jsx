import { Link } from "react-router-dom";
import GoogleIcon from "../assets/google.svg";
import AppleIcon from "../assets/apple.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";


function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    const showPasswordHandler = () => {
        setShowPassword(true);
    };

    const hidePasswordHandler = () => {
        setShowPassword(false);
    };

    return (
        <div>

            <p className="mt-7 mb-8 text-center text-gray-600">Please login your account</p>

            <form className="flex flex-col gap-6">

                {/* Email */}
                <div className="flex flex-col gap-2">

                    <label htmlFor="email" className="text-sm font-semibold text-[#111827]">Email address</label>
                    <input id="email" type="email" name="Email" autoComplete="email" placeholder="Enter your email" 
                        className="rounded-lg border border-[#d0d5dd] px-4 py-3 outline-none focus:border-[#4f2cff]"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">

                    <label htmlFor="password" className="text-sm font-semibold text-[#111827]">Password</label>
                    <div className="relative">
                        <input id="password" type={showPassword ? "text" : "password"} name="Password" autoComplete="current-password" placeholder="Enter your password"
                        className="w-full rounded-lg border border-[#d0d5dd] px-4 py-3 pr-12 outline-none focus:border-[#4f2cff]"/>

                        {
                            showPassword ? (
                                <FiEyeOff onClick={hidePasswordHandler} className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xl text-gray-500"/>
                            ) : (
                                <FiEye onClick={showPasswordHandler} className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xl text-gray-500"/>
                            )
                        }
                    </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <input id="remember" type="checkbox" className="h-4 w-4 accent-[#4f2cff]"/>
                        <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                    </div>

                    <Link to="#" className="text-sm font-medium text-[#4f2cff]">
                        Forgot password?
                    </Link>
                </div>

                {/* Login Button */}
                <button type="submit" className=" cursor-pointer rounded-lg bg-[#4f2cff] py-3 text-lg font-semibold text-white transition-all hover:bg-[#4324e6]">
                    Login
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">

                    <div className="h-px flex-1 bg-[#e4e7ec]"></div>

                    <p className="text-sm text-gray-500">or continue with</p>

                    <div className="h-px flex-1 bg-[#e4e7ec]"></div>

                </div>

                {/* Other Login options */}
                <div className="grid grid-cols-2 gap-4">

                    <button type="button" className="flex items-center justify-center gap-4 rounded-lg cursor-pointer border border-[#d0d5dd] py-3 font-semibold hover:bg-sky-50">
                        <img src={GoogleIcon} alt="Google" className="w-5" />
                        Continue with Google
                    </button>

                    <button type="button" className="flex items-center justify-center gap-4 rounded-lg cursor-pointer border border-[#d0d5dd] py-3 font-semibold hover:bg-sky-50">
                        <img src={AppleIcon} alt="Apple" className="w-5" />
                        Continue with Apple
                    </button>

                </div>

                {/* Signup */}
                <p className="mt-2 text-center text-sm text-gray-600">Don't have an account? 
                    <Link to="/signup" className="font-semibold text-[#4f2cff]"> Sign up</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;