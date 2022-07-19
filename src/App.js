import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center items-center bg-blue-200 p-10 rounded-xl">
        <form className="w-full">
          <h1 className="text-center text-3xl mb-3">Login</h1>
          <div className="mb-8">
            <label
              for="email"
              className="block mb-2 text-base font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 focus:border-blue-400 text-base rounded-xl focus:ring-offset-2 focus:ring-blue-300 focus:outline-none focus:ring-2 block w-full p-2.5"
              placeholder="email@email.com"
              required=""
            />
          </div>
          <div className="mb-8">
            <label
              for="password"
              className="block mb-2 text-base font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 focus:border-blue-400 text-base rounded-xl focus:ring-offset-2 focus:ring-blue-300 focus:outline-none focus:ring-2 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-start mb-8">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                required=""
              />
            </div>
            <label
              for="remember"
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
      </div>
    </div>
  );
}

export default App;
