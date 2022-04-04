import { useState } from "react";
import Button from "../components/Button";
import configs from "../configs.json";

// Login page
const LoginPage = () => {
  const [phone, setPhone] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");

  return (
    <div className="mx-auto max-w-[400px] px-5 py-5 mt-5 bg-glitch-bar rounded">
      {/* Login page heading */}
      <h2 className="font-bold text-2xl mt-2 text-white">
        Login to <span className="text-glitch-orange">{configs.sitename}</span>
      </h2>

      {/* Login form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mt-4">
          <label htmlFor="phone" className="text-white font-medium block">
            Phone
          </label>
          <input
            type="text"
            title="Phone"
            id="phone"
            className="px-2 py-2 bg-transparent text-white border border-gray-300 w-full outline-none"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-white font-medium block">
            Password
          </label>
          <input
            type="password"
            title="Password"
            id="password"
            className="px-2 py-2 bg-transparent text-white border border-gray-300 w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="mt-4">
          <Button className="py-2 hover:bg-glitch-orange">
            <span>Login</span>
          </Button>
        </div>
      </form>
      <hr className="w-full border border-t-transparent  border-b-gray-300 mt-5" />
      <div className="mt-2 flex text-white">
        Don't have an account{" "}
        <a href="#signup" className="ml-2 text-glitch-orange hover:underline">
          {" "}
          Sign up here
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
