import Header from "../Header/Header";

function Home({ onOpenProfile, profile }) {
  return <Header profile={profile} onOpenProfile={onOpenProfile} />;
}

export default Home;
