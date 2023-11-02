import { useContext, useState, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import ForgetPassword from "./pages/Auth/ForgetPassword";

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
    <Routes>
      <Route
        path="profile"
        element={
          isLoggedIn && (
            <>
              {
                <Home
                  isLoggedIn={isLoggedIn}
                  profile={profile}
                  onOpenProfile={handleProfile}
                />
              }
              {profile && <Profile onOpenProfile={handleProfile} />}
            </>
          )
        }
      />
      <Route
        path="/"
        element={
          <>
            {isLoggedIn && (
              <Home
                isLoggedIn={isLoggedIn}
                profile={profile}
                onOpenProfile={handleProfile}
              />
            )}
            {!isLoggedIn && <Auth />}
          </>
        }
      />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
    </Routes>
  );
}
