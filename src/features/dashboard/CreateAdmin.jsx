import { useForm } from "react-hook-form";
import { useSignup } from "../authentication/useSignup";

function CreateAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const { signup } = useSignup();

  async function submit(data) {
    // For testing
    await new Promise((res) => setTimeout(res, 1000));
    console.log(
      "%c📝 LOG: My info acc is:",
      "color: #6B7280; font-weight: bold",
      data
    );

    signup(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <div className=" mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Create New Admin
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Enter the details for the new administrator account
        </p>
      </div>

      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            {...register("fullName", {
              required: "Please enter your name",
            })}
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          {errors?.fullName?.message && (
            <span className="block mt-1 text-xs font-medium text-red-600">
              {errors?.fullName?.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:
                  "❌ Invalid email address. Please enter a valid format like user@example.com",
              },
            })}
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          {errors?.email?.message && (
            <span className="block mt-1 text-xs font-medium text-red-600">
              {errors?.email?.message}
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
            {...register("password", {
              required: "Please enter your password",
            })}
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          {errors?.password?.message && (
            <span className="block mt-1 text-xs font-medium text-red-600">
              {errors?.password?.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              validate: (value) => {
                return (
                  getValues("password") === value ||
                  "Please match your passwords"
                );
              },
            })}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          {errors?.confirmPassword?.message && (
            <span className="block mt-1 text-xs font-medium text-red-600">
              {errors?.confirmPassword?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
        >
          {isSubmitting ? "Creating..." : "Create Admin Account"}
        </button>
      </form>
    </div>
  );
}

export default CreateAdmin;
