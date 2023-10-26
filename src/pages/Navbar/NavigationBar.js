import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  useEffect(function () {
    if (window.location.pathname === "/profile") {
      setOpen(true);
    }
  }, []);

  function handleLinkClick() {
    setOpen((prevState) => !prevState);
  }
  return (
    <nav className={!open ? "navbar" : "changeNavbar"}>
      <h1>
        {!open
          ? "Welcome to Expense Tracker"
          : "Winners never quite, Quitters never win."}
      </h1>
      {!open ? (
        <p>
          Your Profile is Incomplete.
          <Link to="/profile" onClick={handleLinkClick}>
            {" "}
            Complete now
          </Link>
        </p>
      ) : (
        <p className="changeP">
          Your Profile is 64% completed. A complete profile has higher chances
          of landing a job.
          <Link to="" onClick={handleLinkClick}>
            {" "}
            Complete now
          </Link>
        </p>
      )}
    </nav>
  );
}
