import { useState } from "react";
import Button from "../../UI/Button";

export default function SignUp() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  let validPassword = true;

  if (inputConfirmPassword.length > 0) {
    if (inputConfirmPassword !== inputPassword) {
      validPassword = false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
      {
        method: "Post",
        body: JSON.stringify({
          inputEmail,
          inputPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      const data = await response.json();
      alert(data.error.message);
    } else {
      const data = await response.json();
      console.log("User has successfully signed up");
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up
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
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                value={inputConfirmPassword}
                onChange={(e) => setInputConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="text-sm">
              <p
                href="#"
                className="font-semibold text-red-600 hover:text-red-600"
              >
                {!validPassword
                  ? "Confirm Password doesn't match, Try again !"
                  : ""}
              </p>
            </div>
          </div>

          <div>
            <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
              Sign Up
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Have an account?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
