import NavigationBar from "../Navbar/NavigationBar";

export default function Header({ onOpenProfile, profile }) {
  return (
    <header>
      <NavigationBar profile={profile} onOpenProfile={onOpenProfile} />
      <hr />
    </header>
  );
}
