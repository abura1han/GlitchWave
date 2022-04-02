import { useState } from "react";
import configs from "../configs.json";

const LoginPage = () => {
  const [phone, setPhone] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");

  return (
    <div className="mx-auto max-w-[400px] shadow-sm shadow-gray-400 px-5 py-5">
      {/* Login page heading */}
      <h2 className="font-bold text-2xl mt-2">
        Login to <span className="text-blue-600">{configs.sitename}</span>
      </h2>

      {/* Login form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mt-4">
          <label htmlFor="phone" className="font-medium block">
            Phone
          </label>
          <input
            type="text"
            title="Phone"
            id="phone"
            className="px-2 py-2 text-gray-600 border border-gray-300 w-full focus:border-blue-600 outline-none"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="font-medium block">
            Password
          </label>
          <input
            type="password"
            title="Password"
            id="password"
            className="px-2 py-2 text-gray-600 border border-gray-300 w-full focus:border-blue-600 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 shadow-sm hover:shadow-gray-400 text-white bg-blue-600 font-medium"
          >
            Login
          </button>
        </div>
      </form>
      <hr className="w-full border border-t-transparent  border-b-gray-300 mt-5" />
      <div className="mt-2 flex">
        Don't have an account{" "}
        <a href="#signup" className="ml-1 text-blue-600 hover:underline">
          {" "}
          Sign up here
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
