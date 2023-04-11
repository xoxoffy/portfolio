import { useTranslation } from 'react-i18next';
import './Navbar.css';
import { MdLanguage } from 'react-icons/md';
interface Props {
  onPortfolioButtonClick: () => void;
  onContactButtonClick: () => void;
}

const NavBar: React.FunctionComponent<Props> = ({
  onPortfolioButtonClick,
  onContactButtonClick,
}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="title">
        <h3>
          <b>Dominik Woźniewicz</b>
        </h3>
      </div>

      <div className="navbar-buttons">
        <button onClick={onPortfolioButtonClick}>
          <h3>portfolio</h3>
        </button>
        <button onClick={onContactButtonClick}>
          <h3>{t('Contact')}</h3>
        </button>
        <label className="language-icon">
          <MdLanguage />
        </label>
        <select onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;
