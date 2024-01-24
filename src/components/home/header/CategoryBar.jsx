import styles from "./CategoryBar.module.css";
import MenuIcon from "../../../icon/MenuIcon";
import DownArrow from "../../../icon/DownArrow";

function CategoryBar() {
  return (
    <div className={styles["category-bar__bg"]}>
      <div className="container">
        <div className={styles["category-bar"]}>
          <button>
            <MenuIcon />
            <span>Categories</span>
            <DownArrow />
          </button>

          <button>New Arrival</button>
          <button>Deals</button>
          <button>Women's</button>
          <button>Men's</button>
          <button>Kid's</button>
          <button>Bags & Luggage</button>
          <button>Christmas Collection</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
