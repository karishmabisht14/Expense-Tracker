import { useState } from "react";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      const data = await response.json();
      console.log(data.error.errorMessage);
    } else {
      alert("Verification code is sent in your email. Please check your email");
      navigate("/");
    }
  }

  function handleLogin() {
    navigate("/");
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
          Reset Your Password
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Button className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600">
              Reset Password
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Aready a user?
          <Button
            className="font-semibold leading-6 text-cyan-600 hover:text-cyan-600"
            onClick={handleLogin}
          >
            Login
          </Button>
        </p>
      </div>
    </div>
  );
}
