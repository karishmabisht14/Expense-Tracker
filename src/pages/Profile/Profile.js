import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/UI/Button";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/fa/github";
import { user_square } from "react-icons-kit/ikons/user_square";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Profile({ onOpenProfile }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const id = localStorage.getItem(authCtx.email);

  useEffect(() => {
    async function getUserData() {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.log(data.error.message);
      } else {
        const data = await response.json();
        console.log(data);
        data.users.map((x) => {
          return setName(x.displayName), setPhoto(x.photoUrl);
        });
      }
    }
    getUserData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: id,
          displayName: name,
          photoUrl: photo,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      const data = await response.json();
      console.log(data.error.message);
    } else {
      const data = await response.json();
      console.log(data);
      alert("Your Profile is successfully Updated...");
      onOpenProfile(false);
      navigate("/");
    }
  }
  return (
    <div className="container">
      <div className="contact">
        <h1>Contact Details</h1>
        <Button>Cancel</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <Icon icon={github} />
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">
            <Icon icon={user_square} />
            Photo URL:
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
}
