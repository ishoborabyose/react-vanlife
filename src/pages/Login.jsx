import { useState } from "react";
import { useLoaderData, useNavigate, redirect } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="font-bold text-center mb-12 text-3xl leading-5 text-[#161616]">
          Sign in to your account
        </h1>
        {message && (
          <h3 className="text-red-800 text-3xl leading-9 my-3">{message}</h3>
        )}
        {error && (
          <h3 className="text-red-800 text-3xl leading-9 my-3">
            {error.message}
          </h3>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
            className="py-2 bg-white px-2 placeholder:text-base placeholder:text-[#4d4d4d] placeholder:leading-6 border border-[#D1D5DB] solid"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
            className="py-2 bg-white px-2 placeholder:text-base placeholder:text-[#4d4d4d] placeholder:leading-6 border border-[#D1D5DB] solid"
          />
          <button
            disabled={status === "submitting"}
            className="bg-[#FF8C38] rounded-md mt-5 py-5 text-white text-center text-base leading-5 font-bold"
          >
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
        <h6 className="mt-12 font-medium text-base text-center leading-6">
          Don’t have an account?{" "}
          <span className="text-[#FF8C38]">Create one now</span>
        </h6>
      </div>
    </div>
  );
};
export default Login;
