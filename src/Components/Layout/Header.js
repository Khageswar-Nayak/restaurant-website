import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://3.bp.blogspot.com/-ehG-SRMbFzQ/V-oTzNbMGqI/AAAAAAAAA8U/i1XeTKr1z-4YzXb3fWUuzEWEDwl7ZZu_QCLcB/s1600/thanksgiving%2Bday%2Bfood%2Bimagesss_pictures_photos_menu_items_recipe_all%2Bitems.jpg"
          alt="A table full of delicious food !"
        />
      </div>
    </Fragment>
  );
};

export default Header;
