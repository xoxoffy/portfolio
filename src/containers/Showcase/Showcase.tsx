import Project from '../../components/Project/Project';
import './Showcase.css';
import AnimText from '../../components/TypeAnimation/AnimText';
import { pomoImages } from '../../images/images';
import { cartImages } from '../../images/images';

const Showcase: React.FunctionComponent = () => {
  // TODO IMAGE RESIZING
  const [pomo1, pomo2, pomo3] = pomoImages;
  const [cart1, cart2, cart3] = cartImages;

  return (
    <div className="showcase">
      <AnimText animText="Moje projekty" animWrapper="h1" />
      <Project title="Pomodoro" img1={pomo1} img2={pomo2} img3={pomo3} />
      <Project title="Shopping Cart" img1={cart1} img2={cart2} img3={cart3} />
    </div>
  );
};

export default Showcase;
