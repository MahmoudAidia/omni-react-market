import styles from "./CategoryBar.module.css";
import MenuIcon from "../../../icon/MenuIcon";
import DownArrow from "../../../icon/DownArrow";

function CategoryBar() {
  return (
    <div className={styles["category-bar__bg"]}>
      <div className="container">
        <div className={styles["category-bar"]}>
          <div>
            <button>
              <MenuIcon />
              <span>Categories</span>
              <DownArrow />
            </button>
          </div>
          <div>
            <button>New Arrival</button>
          </div>
          <div>
            <button>Deals</button>
          </div>
          <div>
            <button>Women's</button>
          </div>
          <div>
            <button>Men's</button>
          </div>
          <div>
            <button>Kid's</button>
          </div>
          <div>
            <button>Bags & Luggage</button>
          </div>
          <div>
            <button>Christmas Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
