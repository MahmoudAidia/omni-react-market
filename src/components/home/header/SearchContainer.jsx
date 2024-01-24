import Logo from "../../../icon/Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import styles from "./SearchContainer.module.css";
function SearchContainer() {
  return (
    <div className={styles["search-container__bg"]}>
      <div className="container">
        <div className={styles["search-container"]}>
          <Logo />
          <SearchBar />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
