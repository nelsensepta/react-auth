import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center flex-col mt-8">
      <div className="flex justify-center items-center bg-blue-200 py-12 px-20 rounded-xl flex-col">
        <h1 className="text-center text-3xl mb-3">Register</h1>
        <form className="mt-2 min-w-[390px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8 w-full">
            <label
              for="username"
              className="block mb-2 text-base font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
              className={`bg-gray-50 border border-gray-300  text-base rounded-xl focus:ring-offset-2 focus:outline-none focus:ring-2 block w-full p-2.5 ${
                errors.username
                  ? "focus:border-red-400 focus:ring-red-500"
                  : "focus:border-blue-400 focus:ring-blue-500"
              }`}
            />
            <p className="text-red-500 text-sm mt-1.5">
              {errors.username?.type === "required" && "First name is required"}
            </p>
          </div>
          <div className="mb-8 w-full">
            <label
              for="email"
              className="block mb-2 text-base font-medium text-gray-600"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className={`bg-gray-50 border border-gray-300  text-base rounded-xl focus:ring-offset-2 focus:outline-none focus:ring-2 block w-full p-2.5 ${
                errors.email
                  ? "focus:border-red-400 focus:ring-red-500"
                  : "focus:border-blue-400 focus:ring-blue-500"
              }`}
              placeholder="email@email.com"
            />
            <p className="text-red-500 text-sm mt-1.5">
              {errors.email?.type === "required" && "Email is required"}
            </p>
          </div>
          <div className="mb-8">
            <label
              for="password"
              className="block mb-2 text-base font-medium text-gray-600"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className={`bg-gray-50 border border-gray-300  text-base rounded-xl focus:ring-offset-2 focus:outline-none focus:ring-2 block w-full p-2.5 ${
                errors.password
                  ? "focus:border-red-400 focus:ring-red-500"
                  : "focus:border-blue-400 focus:ring-blue-500"
              }`}
            />
            <p className="text-red-500 text-sm mt-1.5">
              {errors.password?.type === "required" && "Password is Required"}
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-base w-full base:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
        <div className="flex justify-center items-center flex-col gap-2">
          <span className="text-sm mt-8 text-gray-600">Lupa password ?</span>
          <span className="text-sm text-gray-600">
            Sudah Punya Akun ?
            <span className="text-blue-700">
              <Link to="/"> Login</Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
