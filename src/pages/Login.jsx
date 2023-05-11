import {
  useLoaderData,
  useNavigation,
  redirect,
  Form,
  useActionData,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

const Login = () => {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="font-bold text-center mb-12 text-3xl leading-5 text-[#161616]">
          Sign in to your account
        </h1>
        {message && (
          <h3 className="text-red-800 text-3xl leading-9 my-3">{message}</h3>
        )}
        {errorMessage && (
          <h3 className="text-red-800 text-3xl leading-9 my-3">
            {errorMessage}
          </h3>
        )}
        <Form method="post" className="flex flex-col" replace>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="py-2 bg-white px-2 placeholder:text-base placeholder:text-[#4d4d4d] placeholder:leading-6 border border-[#D1D5DB] solid"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="py-2 bg-white px-2 placeholder:text-base placeholder:text-[#4d4d4d] placeholder:leading-6 border border-[#D1D5DB] solid"
          />
          <button
            disabled={navigation.state === "submitting"}
            className="bg-[#FF8C38] rounded-md mt-5 py-5 text-white text-center text-base leading-5 font-bold"
          >
            {navigation.state === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </Form>
        <h6 className="mt-12 font-medium text-base text-center leading-6">
          Don’t have an account?{" "}
          <span className="text-[#FF8C38]">Create one now</span>
        </h6>
      </div>
    </div>
  );
};
export default Login;
