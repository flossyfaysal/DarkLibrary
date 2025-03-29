import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Logo or Branding (Mimicking X.com's simplicity) */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-10 h-10 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Simplified 'X' logo */}
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-black text-center mb-2">
          {!isLogin ? "Create your account" : "Library Login"}
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Join the biggest library hub today.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign up
          </button>
          {/* Sign up with Google Button */}
          <button
            type="button"
            className="w-full py-3 bg-white text-black font-semibold rounded-full border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
          >
            {/* Google Logo SVG */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.7-2.36 1.11-3.71 1.11-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C4.01 20.36 7.68 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.87 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.69-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.68 1 4.01 3.64 2.18 7.07l3.69 2.84c.86-2.59 3.28-4.53 6.13-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Sign up with Google</span>
          </button>
        </form>

        {/* Terms and Links */}
        <p className="mt-4 text-xs text-gray-500 text-center">
          By signing up, you agree to the{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
