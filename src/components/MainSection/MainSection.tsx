import AnimText from '../TypeAnimation/AnimText';
import './MainSection.css';

interface Props {
  onPortfolioButtonClick: () => void;
}

const MainSection: React.FunctionComponent<Props> = ({
  onPortfolioButtonClick,
}) => {
  return (
    <div className="img-background">
      <section className="main-section">
        <h1>
          Cześć!
          <br /> Jestem Dominik.
        </h1>

        <AnimText
          animText="Samouk programowania, a oto moje projekty"
          animWrapper="span"
          animSpeed={40}
        />

        <button className="portfolio-button" onClick={onPortfolioButtonClick}>
          Sprawdź
        </button>
      </section>
    </div>
  );
};

export default MainSection;
