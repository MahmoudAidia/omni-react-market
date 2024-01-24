import AnnounceBar from "./AnnounceBar";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchContainer";

function Header() {
  return (
    <header>
      <AnnounceBar />
      <SearchBar />
      <CategoryBar />
    </header>
  );
}

export default Header;
