import {Link} from "react-router-dom";

const Register= () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center mt-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">

        <h2 className="text-2xl font-bold mb-6 items-center flex justify-center text-gray-900">
          Create an account
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="confirmPassword"
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="mr-2"
              required
            />

            <label htmlFor="terms" className="text-sm">
              I accept the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
          >
            Create an account
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login 
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;