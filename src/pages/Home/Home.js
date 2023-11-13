import { useLocation } from "react-router";
import Header from "../Header/Header";
import Section from "../Layout/Section";

function Home({ onOpenProfile, profile }) {
  const location = useLocation();
  return (
    <>
      <Header profile={profile} onOpenProfile={onOpenProfile} />
      {location.pathname === "/" && <Section />}
    </>
  );
}

export default Home;
