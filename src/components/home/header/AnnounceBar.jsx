import "../../../main.css";
import styles from "./AnnounceBar.module.css";
import CarIcon from "../../../icon/CarIcon";

function AnnounceBar() {
  return (
    <div className={styles["announce-bar__bg"]}>
      <div className="container">
        <div className={styles["announce-bar"]}>
          <div>
            <CarIcon />
            <span>Track your order</span>
          </div>

          <div>
            <span>Summer Collection is here !</span>
            <a href="#">Show now</a>
          </div>

          <div className={styles["language"]}>
            <span>English</span>
            <span>|</span>
            <span>العربية</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnounceBar;
