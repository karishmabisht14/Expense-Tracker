import Auth from "../Auth/Auth";
import Header from "../Header/Header";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Auth />;
  }
  return <Header />;
}

export default Home;
