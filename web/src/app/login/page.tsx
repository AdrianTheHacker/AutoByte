export default function Login() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Logging-in is required for emailing your shopping list to you!</p>
          <div className="card-body">
            <button className="btn btn-primary">Login with Google</button>
            <button className="btn btn-primary">Login with Microsoft</button>
            <button className="btn btn-primary">Login with GitHub</button>
          </div>
        </div>
      </div>
    </div>
  )
}