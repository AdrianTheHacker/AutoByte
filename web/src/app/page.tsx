import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">AutoByte🥕</h1>
          <p className="py-6">
            Your solution to fast, affordable, and healthy meal prepping.
          </p>
          <Link className="btn btn-primary" href="/view-recipes">View Recipes🧑‍🍳</Link>
        </div>
      </div>
    </div>
  );
}
