import { useState } from "react";

const Navbar = () => {
  const [canvas, setCanvas] = useState();
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="top-0 rounded-b-xl container inset-x-0 shadow-md fixed z-50 bg-blue-200">
      <nav className="container flex sm:items-center justify-between py-5 items-start">
        <div className="flex-1 justify-start items-center self-start">
          <h1>Logo</h1>
        </div>
        <ul
          className={`${
            canvas ? "flex pt-20" : "hidden"
          }  relative sm:flex flex-1 justify-end items-center gap-3 flex-col sm:flex-row text-bookmark-blue dark:text-title-dark text-md`}
        >
          <hr className="w-full border-t-2 border-black text-blue-300 dark:border-white md:hidden" />
          {isLogin ? (
            <li className="cursor-pointer btn btn-red">
              <button>Logout</button>
            </li>
          ) : (
            <li className="cursor-pointer btn btn-red">
              <button>Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
