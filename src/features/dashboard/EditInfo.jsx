import { useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import { useAdmin } from "./useAdmin";
import { useUpdateInfo } from "./useUpdateInfo";

function EditInfo() {
  const { admin, isLoading } = useAdmin();

  const { updateInfo } = useUpdateInfo();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { avatar_url, full_Name, email } = admin || {};

  console.log(
    "%c📝 LOG: Admin info is:",
    "color: #6B7280; font-weight: bold",
    admin
  );

  async function submit(data) {
    // For testing
    await new Promise((res) => setTimeout(res, 1000));

    console.log(
      "%cℹ️ INFO: My data is",
      "color: #3B82F6; font-weight: bold",
      data
    );

    updateInfo(data);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Edit Profile</h1>
        <p className="text-sm text-gray-600">
          Update your personal information and profile settings.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(submit)} className="space-y-6">
        {/* Avatar Upload Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-100 rounded-full border-2 border-gray-200 flex items-center justify-center">
              {avatar_url ? (
                <img src={avatar_url} alt="avatar" className="rounded-full" />
              ) : (
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                name="avatar"
                type="file"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                {...register("avatar", {
                  required: "Please upload your avatar",
                })}
              />
              {errors?.avatar?.message && (
                <span className="block mt-1 text-xs font-medium text-red-600">
                  {errors?.avatar?.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Full Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            defaultValue={full_Name}
            type="text"
            id="fullName"
            name="fullName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: "Please enter your name",
            })}
          />
          {errors?.fullName?.message && (
            <span className="block mt-1 text-xs font-medium text-red-600">
              {errors?.fullName?.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            defaultValue={email}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
            placeholder="Enter your email address"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:
                  "❌ Invalid email address. Please enter a valid format like user@example.com",
              },
            })}
          />
          {errors?.email?.message && (
            <span className="block mt-1 text-xs font-medium text-red-600">
              {errors?.email?.message}
            </span>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-md"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditInfo;
