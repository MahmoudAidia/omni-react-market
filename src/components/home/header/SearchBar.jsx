import SearchIcon from "../../../icon/SearchIcon";
import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles["search-bar__outer"]}>
      <div className={styles["search-bar"]}>
        <button>
          All categories{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M11.375 5.75L7 10.125L2.625 5.75"
                stroke="#0D090A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <input placeholder="Search" />
      </div>
      <SearchIcon />
    </div>
  );
}

export default SearchBar;
