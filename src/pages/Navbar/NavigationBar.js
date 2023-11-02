import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Button from "../../components/UI/Button";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function NavigationBar({ onOpenProfile, profile }) {
  const authCtx = useContext(AuthContext);

  const tokenId = authCtx.token;

  function handleLinkClick() {
    onOpenProfile((prevState) => !prevState);
  }

  function handleLogout() {
    authCtx.logout();
  }

  async function handleVerifyEmail() {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const data = await response.json();
      console.log(data.error.message);
    }
  }

  return (
    <nav className={!profile ? "navbar" : "changeNavbar"}>
      <h1>
        {!profile
          ? "Welcome to Expense Tracker"
          : "Winners never quite, Quitters never win."}
      </h1>
      {!profile && <Button onClick={handleLogout}>Logout</Button>}
      {!profile && (
        <Button onClick={handleVerifyEmail}>Verify Your Email</Button>
      )}
      {!profile ? (
        <p>
          Your Profile is Incomplete.
          <Link to="/profile" onClick={handleLinkClick}>
            {" "}
            Complete now
          </Link>
        </p>
      ) : (
        <p className="changeP">
          Your Profile is 64% completed. Update your profile to complete 100%.
          <Link to="" onClick={handleLinkClick}>
            {" "}
            Back to Home
          </Link>
        </p>
      )}
    </nav>
  );
}
