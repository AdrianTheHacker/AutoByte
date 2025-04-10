import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTOBYTE🥕 Meal Prepping App",
  description: "Meal prepping tool for students and busy people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <head>
        <meta name="viewport" content="viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2"><Link href="./">Autobyte🥕</Link></div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li><Link href="./login">Login</Link></li>
                  <li><Link href="./login">Create Account</Link></li>
                  <li><Link href="./view-recipes">View Recipes</Link></li>
                  <li>
                    <div className="avatar">
                      <div className="w-8 rounded-md">
                        <img src="/NoAccountPFP.jpg" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li><Link href="./login">Login</Link></li>
              <li><Link href="./login">Create Account</Link></li>
              <li><Link href="./view-recipes">View Recipes</Link></li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
