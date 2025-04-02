'use client'

import Link from "next/link";
import { signInWithGoogle } from "../libraries/firebase.env.config";

const CreateAccountPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Account</h1>
          <p className="py-6">
            Creating an account will allow you to browse different recipes, create shopping lists, and even upload your own recipes for others to try!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input type="firstName" className="input" placeholder="First Name" />
              <input type="lastName" className="input" placeholder="Last Name" />
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div className="flex justify-end">
                <Link className="link link-hover" href="/login">Have an account? Login</Link>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <button className="btn btn-neutral mt-4" onClick={() => {
                signInWithGoogle()
              }}>Sign-in with Google</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;