import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function submitHandler(e) {
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")



  }
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
          <p className="text-sm text-gray-500 mt-1">Please enter your details to sign in</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => {
          submitHandler(e)
        }}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;