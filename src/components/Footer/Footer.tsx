import style from './Footer.module.scss';
import incode from '../../assets/IncodeGroup.png';
import github from '../../assets/github.svg';
import twitter from '../../assets/twitter.svg';
import heart from '../../assets/heart.svg';

function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        performed as part of a test <br />
        case for the company
      </p>
      <img src={incode} alt="IncodeGroup Logo" className={style.logo} />
      <ul>
        <li>
          <a href="https://github.com/incodellc" target="_blank" id={style.github}>
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/incode_group" target="_blank" id={style.twitter}>
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/incode_group/" target="_blank" id={style.heart}>
            <img src={heart} alt="heart" />
          </a>
        </li>
      </ul>
      <div className={style.copyright}>
        <p>2023</p>
      </div>
    </footer>
  );
}

export default Footer;
