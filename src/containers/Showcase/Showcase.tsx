import Project from '../../components/Project/Project';
import './Showcase.css';
import AnimText from '../../components/TypeAnimation/AnimText';
import { pomoImages } from '../../images/images';
import { cartImages } from '../../images/images';
import { budgetImages } from './../../images/images';

const Showcase: React.FunctionComponent = () => {
  const [pomo1, pomo2, pomo3] = pomoImages;
  const [cart1, cart2, cart3] = cartImages;
  const [budget1, budget2, budget3] = budgetImages;

  return (
    <div className="showcase">
      <AnimText animText="Moje projekty" animWrapper="h1" />
      <Project
        title="Pomodoro"
        description="Własna wersja popularnej strony do zarządzania czasem wykorzystująca m.in Redux Toolkit"
        img1={pomo1}
        img2={pomo2}
        img3={pomo3}
      />
      <Project
        title="Shopping Cart"
        description="Projekt typowego wózka sklepowego z produktami wykorzystujący React Query, Styled Components oraz Material UI"
        img1={cart1}
        img2={cart2}
        img3={cart3}
      />
      <Project
        title="Budget Planner"
        description="Planer budżetu domowego wykorzystujący wszystkie akcje CRUD"
        img1={budget1}
        img2={budget2}
        img3={budget3}
      />
    </div>
  );
};

export default Showcase;
