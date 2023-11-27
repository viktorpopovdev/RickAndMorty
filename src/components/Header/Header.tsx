import style from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <NavLink to="/" className={style.link}>
          <img src={logo} alt="logo" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
