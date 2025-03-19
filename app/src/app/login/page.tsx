import Link from "next/link"

const LoginPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login</h1>
                <p className="py-6">
                    Login to view various recipes and start planning your meals for the week.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div className="flex justify-between">
                            <a className="link link-hover">Forgot password?</a>
                            <Link className="link link-hover" href="/create-account">No Account? Create Account</Link>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage