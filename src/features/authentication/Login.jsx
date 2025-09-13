import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { login } = useLogin();

  async function submit(data) {
    // for testing
    await new Promise((res) => setTimeout(res, 2000));

    console.log("📝 LOG: my data is:", data);

    login(
      { ...data },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  async function errorSubmit(err) {
    // for testing
    await new Promise((res) => setTimeout(res, 2000));

    console.log("🔍 DEBUG: my error is:", err);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(submit, errorSubmit)}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message:
                    "❌ Invalid email address. Please enter a valid format like user@example.com",
                },
              })}
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
            {errors.email?.message && (
              <span className="block mt-1 text-xs font-medium text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Please enter your password",
              })}
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
            {errors.password?.message && (
              <span className="block mt-1 text-xs font-medium text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {isSubmitting ? "Signing..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
