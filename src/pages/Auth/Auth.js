import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        login ? (
          <SignIn onLogin={setLogin} onOpen={setIsOpen} />
        ) : (
          <SignUp onLogin={setLogin} />
        )
      ) : (
        <ForgetPassword />
      )}
    </>
  );
}
