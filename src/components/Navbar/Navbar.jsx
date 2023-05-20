import { Button, ButtonGroup } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/images/mobilia-logo.png";

const Navbar = () => {
  return (
    <div className={styles.NavBar}>
      <Link to="/">
        <img src={ imgLogo } alt="Mobilia logo" />
      </Link>
      <ul className={ styles.NavBarList }>
        <ButtonGroup variant="text">
          <NavLink to="/category/dormitorio" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
            <Button sx={{ fontWeight: 'bold' }}> Dormitorio </Button>
          </NavLink>
          <NavLink to="/category/home-office" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
            <Button sx={{ fontWeight: 'bold' }}> Home Office </Button>
          </NavLink>
          <NavLink to="/category/living" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
            <Button sx={{ fontWeight: 'bold' }}> Living </Button>
          </NavLink>
          <NavLink to="/category/cocina" className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>
            <Button sx={{ fontWeight: 'bold' }}> Cocina </Button>
          </NavLink>
        </ButtonGroup>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;