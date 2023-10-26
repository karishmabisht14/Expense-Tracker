import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Home isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}
