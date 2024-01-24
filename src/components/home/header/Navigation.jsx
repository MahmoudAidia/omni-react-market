import CartIcon from "../../../icon/CartIcon";
import HeartIcon from "../../../icon/HeartIcon";
import LocationIcon from "../../../icon/LocationIcon";
import LoginIcon from "../../../icon/LoginIcon";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles["navigation"]}>
      <div>
        <LocationIcon />
        <a href="#">Our Store</a>
      </div>
      <div>
        <LoginIcon />
        <a href="#">Login / Sign up</a>
      </div>
      <div>
        <HeartIcon />
        <a href="#">Wishlist </a>
      </div>
      <div>
        <CartIcon />
        <a href="#">My cart</a>
      </div>
    </nav>
  );
}

export default Navigation;
