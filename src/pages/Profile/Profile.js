import { useContext, useRef, useState } from "react";
import Button from "../../components/UI/Button";
import "./Profile.css";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/fa/github";
import { user_square } from "react-icons-kit/ikons/user_square";
import AuthContext from "../../context/AuthContext";

export default function Profile() {
  const nameRef = useRef("");
  const imgRef = useRef("");
  const authCtx = useContext(AuthContext);
  const [update, setUpdate] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const id = localStorage.getItem(authCtx.email);

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB6Jh0_AjPH7j6fgFJLrd-al_ICaYDKbIc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: id,
          displayName: nameRef.current.value,
          photoUrl: imgRef.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      const data = await response.json();
      console.log(data.error.message);
    } else {
      setUpdate(true);
    }
  }
  return (
    <div className="container">
      <div className="contact">
        <h1>Contact Details</h1>
        <Button>Cancel</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <Icon icon={github} />
          Full Name:
        </label>
        <input type="text" id="name" name="name" ref={nameRef} />
        <label htmlFor="photo">
          <Icon icon={user_square} />
          Profile Photo URL:
        </label>
        <input type="imgage" id="photo" name="photo" ref={imgRef} />
        <Button type="submit">Update</Button>
      </form>
      <p>{update && "Your Profile is Successfully Updated...."}</p>
    </div>
  );
}
