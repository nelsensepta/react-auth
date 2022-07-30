import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ForgotModal from "../components/ForgotModal";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <ForgotModal isOpen={isOpen} closeModal={closeModal} />
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="flex justify-center items-center bg-blue-200 py-12 px-20 rounded-xl flex-col">
          <h1 className="text-center text-3xl mb-3">Login</h1>
          <form
            className="mt-2 min-w-[390px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-8 w-full">
              <label
                forhtml="email"
                className="block mb-2 text-base font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
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
                forhtml="password"
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
            <div className="flex items-start mb-8">
              <div className="flex justify-center items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                  required=""
                />
              </div>
              <label
                forhtml="remember"
                className="ml-2 text-base font-medium text-gray-600"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-base w-full base:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center items-center flex-col gap-2">
            <button onClick={openModal} className="text-sm mt-8 text-gray-600">
              Lupa password ?
            </button>
            <span className="text-sm text-gray-600">
              Belum punya akun ?
              <span className="text-blue-700">
                <Link to="/register"> Register</Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
