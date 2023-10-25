import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [login, setLogin] = useState(true);

  return (
    <>{login ? <SignIn onLogin={setLogin} /> : <SignUp onLogin={setLogin} />}</>
  );
}
