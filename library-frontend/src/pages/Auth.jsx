import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthForm from "../hooks/useAuthForm";

// Resolve an issue: When login page reloads, its possible to stays at admin page, and when isauthenticated false then it stils rout says /admin, I need to remove this.

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { formData, errors, handleChange, validate, setErrors } = useAuthForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validate(isLogin)) return;
    try {
      if (!isLogin) {
        console.log("Registering a Student", formData);
        // Call your API to register a student
        setIsLogin(true);
      } else {
        console.log("Logging in a Student", formData);
        // Call your API to log in a student
        localStorage.setItem("isAuthenticated", "true");
        navigate("/admin");
      }
    } catch (error) {
      setErrors({ form: "An error occurred. Please try again." });
      console.error("Error during authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="/../dist/vite.svg"
            alt="Logo"
            className="w-24 h-24 rounded-full shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-black text-center mb-2">
          {isLogin ? "Library Login" : "Create an Account"}
        </h1>
        <p className="text-gray-500 text-center mb-6">
          {isLogin ? "Access your library" : "Join us today!"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Sign in Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          {/* Sign in with Google Button */}
          <button
            type="button"
            className="cursor-pointer w-full py-3 bg-white text-black font-semibold rounded-full border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
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
            <span>
              {isLogin ? "Sign in with Google" : "Sign up with Google"}
            </span>
          </button>
        </form>

        {/* Terms and Links */}
        {!isLogin && (
          <p className="mt-4 text-sm text-gray-500 text-center">
            By signing up, you agree to the{" "}
            <a href="/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        )}
        {isLogin && (
          <p className="mt-4 text-sm text-gray-500 text-center">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>
        )}

        {/* Sign in Page */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Want to create an account ?{" "}
          <a
            onClick={() => setIsLogin(!isLogin)}
            href="javascript:void"
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
