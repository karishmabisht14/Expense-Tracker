import { useContext } from "react";
import Header from "./pages/Header/Header";
import Auth from "./pages/Auth/Auth";
import AuthContext from "./context/AuthContext";

export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!authCtx.isLoggedIn && <Auth />}
      {authCtx.isLoggedIn && <Header />}
    </>
  );
}
