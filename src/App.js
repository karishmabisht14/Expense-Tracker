import { useContext } from "react";
import Header from "./pages/Header/Header";
import Auth from "./pages/Auth/Auth";
import AuthContext from "./context/AuthContext";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile/Profile";

export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!authCtx.isLoggedIn && <Auth />}
      {authCtx.isLoggedIn && <Header />}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}
