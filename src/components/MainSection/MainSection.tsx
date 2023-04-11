import AnimText from '../TypeAnimation/AnimText';
import './MainSection.css';
import { useTranslation } from 'react-i18next';

interface Props {
  onPortfolioButtonClick: () => void;
}

const MainSection: React.FunctionComponent<Props> = ({
  onPortfolioButtonClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className="img-background">
      <section className="main-section">
        <h1>
          {t('Hi')}
          <br /> {t('Im Dominik')}
        </h1>

        {/* <AnimText animText={t('About me')} animWrapper="span" /> */}

        <span>{t('About me')}</span>

        <button className="portfolio-button" onClick={onPortfolioButtonClick}>
          {t('Check out')}
        </button>
      </section>
    </div>
  );
};

export default MainSection;
