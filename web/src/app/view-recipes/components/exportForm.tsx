'use client'

import { useState } from "react"
import { sendEmail } from "../libraries/emailSender"

export const ExportForm = () => {
  const [email, setEmail] = useState<string>("")

  return (
    <div>
      <h2 className="font-bold">Selected Recipes</h2>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
            <input type="email" placeholder="mail@site.com" required onChange={event => {
              setEmail(event.currentTarget.value)
              // console.log(`${event.currentTarget.value} : ${email}`)
            }}/>
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral join-item" onClick={() => sendEmail()}>Export</button>
      </div>
    </div>
  )
}