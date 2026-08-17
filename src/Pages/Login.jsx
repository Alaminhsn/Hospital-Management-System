import {Link }from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6 sm:p-8">
          

          <h1 className="text-2xl font-bold flex justify-center items-center text-gray-900 dark:text-white">
            Sign in to your account
          </h1>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email 
              </label>

              <input
                type="email"
                id="email"
                placeholder="name@gmail.com"
                required
                className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign in
            </button>

            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;