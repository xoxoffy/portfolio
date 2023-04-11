import Project from '../../components/Project/Project';
import './Showcase.css';
import AnimText from '../../components/TypeAnimation/AnimText';
import { pomoImages } from '../../images/images';
import { cartImages } from '../../images/images';
import { budgetImages } from './../../images/images';
import { useTranslation } from 'react-i18next';

const Showcase: React.FunctionComponent = () => {
  const [pomo1, pomo2, pomo3] = pomoImages;
  const [cart1, cart2, cart3] = cartImages;
  const [budget1, budget2, budget3] = budgetImages;

  const { t } = useTranslation();

  return (
    <div className="showcase">
      <h1>{t('Current projects')}</h1>
      <Project
        title="Pomodoro"
        description={t('About Pomodoro')}
        href="https://github.com/xoxoffy/pomodoro"
        img1={pomo1}
        img2={pomo2}
        img3={pomo3}
      />
      <Project
        title="Shopping Cart"
        description={t('About shopping cart')}
        href="https://github.com/xoxoffy/typescript-shopping-cart"
        img1={cart1}
        img2={cart2}
        img3={cart3}
      />
      <Project
        title="Budget Planner"
        description={t('About planner')}
        href="https://github.com/xoxoffy/js-budget"
        img1={budget1}
        img2={budget2}
        img3={budget3}
      />
    </div>
  );
};

export default Showcase;
