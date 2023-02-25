import Project from '../../components/Project/Project';
import './Showcase.css';
import AnimText from '../../components/TypeAnimation/AnimText';

const Showcase: React.FunctionComponent = () => {
  return (
    <div className="showcase">
      <AnimText animText="Moje projekty" animWrapper="h1" />
      <Project />
      <Project />
    </div>
  );
};

export default Showcase;
