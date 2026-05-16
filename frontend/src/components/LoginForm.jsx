function LoginForm() {
    return (
        <div>

            <p className="mt-7 mb-8 text-center text-gray-600">Please login your account</p>

            <form className="flex flex-col gap-6">

                {/* Email */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-semibold text-[#111827]">Email address</label>
                    <input type="email" placeholder="Enter your email"
                        className="rounded-lg border border-[#d0d5dd] px-4 py-3 outline-none focus:border-[#4f2cff]"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-semibold text-[#111827]">Password</label>
                    <input type="password" placeholder="Enter your password"
                        className="rounded-lg border border-[#d0d5dd] px-4 py-3 outline-none focus:border-[#4f2cff]"
                    />
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <input type="checkbox" className="h-4 w-4 accent-[#4f2cff]"/>
                        <p className="text-sm text-gray-600">Remember me</p>
                    </div>

                    <button type="button" className="cursor-pointer text-sm font-medium text-[#4f2cff]">
                        Forgot password?
                    </button>
                </div>

                {/* Login Button */}
                <button type="submit"
                    className="rounded-lg bg-[#4f2cff] py-3 text-lg font-semibold text-white transition-all hover:bg-[#4324e6]">
                    Login
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">

                    <div className="h-px flex-1 bg-[#e4e7ec]"></div>

                    <p className="text-sm text-gray-500">or continue with</p>

                    <div className="h-px flex-1 bg-[#e4e7ec]"></div>

                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">

                    <button type="button" className="rounded-lg border border-[#d0d5dd] py-4 font-semibold">
                        Continue with Google
                    </button>

                    <button type="button" className="rounded-lg border border-[#d0d5dd] py-4 font-semibold">
                        Continue with Apple
                    </button>

                </div>

                {/* Signup */}
                <p className="mt-2 text-center text-sm text-gray-600">Don't have an account? 
                    <span className="cursor-pointer font-semibold text-[#4f2cff]"> Sign up</span>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;