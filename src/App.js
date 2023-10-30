import { useContext, useState, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";

export default function App() {
  const [profile, setProfile] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(function () {
    if (window.location.pathname === "/profile") {
      setProfile(true);
    }
  }, []);

  function handleProfile(flag) {
    setProfile(flag);
  }

  return (
    <>
      <Home
        isLoggedIn={isLoggedIn}
        profile={profile}
        onOpenProfile={handleProfile}
      />
      <Routes>
        <Route
          path="profile"
          element={isLoggedIn && <Profile onOpenProfile={handleProfile} />}
        />
      </Routes>
    </>
  );
}
