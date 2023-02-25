import './Navbar.css';
interface Props {
  onPortfolioButtonClick: () => void;
  onContactButtonClick: () => void;
}

const NavBar: React.FunctionComponent<Props> = ({
  onPortfolioButtonClick,
  onContactButtonClick,
}) => {
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
          <h3>kontakt</h3>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
