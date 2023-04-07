import './App.css';
import MainSection from './components/MainSection/MainSection';
import NavBar from './components/Navbar/Navbar';
import Showcase from './containers/Showcase/Showcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const App = () => {
  const handleClickScrollPortfolio = () => {
    const serviceBoxesElement = document.getElementById('showcase');
    if (serviceBoxesElement) {
      serviceBoxesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollContact = () => {
    const specialistsElement = document.getElementById('contact');
    if (specialistsElement) {
      specialistsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('Test')}</h1>
      <div className="NavBar">
        <NavBar
          onPortfolioButtonClick={handleClickScrollPortfolio}
          onContactButtonClick={handleClickScrollContact}
        />
      </div>
      <MainSection onPortfolioButtonClick={handleClickScrollPortfolio} />

      <div id="showcase">
        <Showcase />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
