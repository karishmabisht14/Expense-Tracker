import Auth from "../Auth/Auth";
import Header from "../Header/Header";

function Home({ isLoggedIn, onOpenProfile, profile }) {
  if (!isLoggedIn) {
    return <Auth />;
  }
  return <Header profile={profile} onOpenProfile={onOpenProfile} />;
}

export default Home;
