import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-center text-3xl mb-7">Set New Password</h1>
        <div className="flex justify-center items-center bg-blue-200 p-16 rounded-xl flex-col">
          <form
            className="mt-2 min-w-[390px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className={`bg-gray-50 border border-gray-300  text-base rounded-xl focus:ring-offset-2 focus:outline-none focus:ring-2 block w-full p-2.5 ${
                  errors.password
                    ? "focus:border-red-400 focus:ring-red-500"
                    : "focus:border-blue-400 focus:ring-blue-500"
                }`}
              />
              <p className="text-red-500 text-sm mt-1.5">
                {errors.password?.type === "required" && "Password is required"}
              </p>
            </div>
            <div className="mb-8">
              <label
                htmlFor="repeatPass"
                className="block mb-2 text-base font-medium text-gray-600"
              >
                Repeat Password
              </label>
              <input
                type="text"
                id="repeatPass"
                {...register("repeatPass", { required: true })}
                className={`bg-gray-50 border border-gray-300 text-base rounded-xl focus:ring-offset-2 focus:outline-none focus:ring-2 block w-full p-2.5 ${
                  errors.repeatPass
                    ? "focus:border-red-400 focus:ring-red-500"
                    : "focus:border-blue-400 focus:ring-blue-500"
                }`}
              />
              <p className="text-red-500 text-sm mt-1.5">
                {errors.repeatPass?.type === "required" &&
                  "Repeat password is required"}
              </p>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-base w-full base:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
