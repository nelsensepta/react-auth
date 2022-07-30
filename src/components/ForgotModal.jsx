import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function ForgotModal({ isOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-700 mb-7 text-center"
                >
                  Input Your Email
                </Dialog.Title>
                <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8 w-full">
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
                  <div className="flex justify-center items-center gap-5">
                    <button
                      type="button"
                      className="w-full flex justify-center rounded-xl border bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:ring-2 focus:ring-offset-2 focus:outline-none focus:border-red-400 focus:ring-red-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full flex justify-center rounded-xl border bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-offset-2 focus:outline-none  focus:border-blue-400 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
