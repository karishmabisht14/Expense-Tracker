import { useContext, useState } from "react";
import Button from "../../components/UI/Button";
import AuthContext from "../../context/AuthContext";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";
import { Link } from "react-router-dom";

export default function SignIn({ onLogin, onOpen }) {
  const authCtx = useContext(AuthContext);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [icon, setIcon] = useState(eyeDisabled);
  const [type, setType] = useState("password");

  function handleToggle() {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeDisabled);
      setType("password");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
      {
        method: "Post",
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const data = await response.json();
      authCtx.login(data.email, data.idToken);
    } else {
      const data = await response.json();
      let errorMessage = "Authentication Failed!!!";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      alert(errorMessage);
    }
  }

  function handleForgetPassword() {
    onOpen(true);
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="../../../images/lockIcon.png"
          alt="Lock Icon"
        />
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="flex items-center justify-between mt-2">
              <input
                id="password"
                name="password"
                type={type}
                autoComplete="current-password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span
                className="flex justify-around items-center"
                onClick={handleToggle}
              >
                <Icon className="absolute mr-10" icon={icon} size={25} />
              </span>
            </div>
          </div>

          <div>
            <Button className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600">
              Login
            </Button>
          </div>
          <div className="text-sm text-center">
            <Link
              to="/forgetPassword"
              onClick={handleForgetPassword}
              className="font-semibold text-cyan-600 hover:text-cyan-600"
            >
              Forget Password
            </Link>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <Button
            onClick={() => onLogin(false)}
            className="font-semibold leading-6 text-cyan-600 hover:text-cyan-600"
          >
            Sign Up
          </Button>
        </p>
      </div>
    </div>
  );
}
