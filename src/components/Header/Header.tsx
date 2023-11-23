import style from './Header.module.scss';
import logo from '../../assets/logo.svg';
const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
    </header>
  );
};

export default Header;
