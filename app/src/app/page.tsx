import Link from 'next/link'

export default function Home() {

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">AUTOBYTE</h1>
          <p className="py-6 text-xl">
            Fast, Easy, and Cost Effective meal prepping.
          </p>
          <Link className="m-8" href="/login">Login</Link>
          <Link className="btn btn-primary" href="/create-account">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
