import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (email, token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialEmail = localStorage.key(0);
  const [email, setEmail] = useState(initialEmail);
  const initialToken = localStorage.getItem(email);
  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  function handleLogin(email, token) {
    setEmail(email);
    setToken(token);
    localStorage.setItem(email, token);
  }

  function handleLogout() {
    setToken(null);
    localStorage.removeItem(email);
  }
  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
