import Products from "../Products/Products";
import classes from "./Main.module.css";
const Main = () => {
  return (
    <main className={classes.main}>
      <Products />
    </main>
  );
};

export default Main;
