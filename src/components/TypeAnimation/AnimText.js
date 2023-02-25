import { TypeAnimation } from 'react-type-animation';

// interface Props {
//   animText: string;
//   animWrapper: string;
//   animSpeed: number;
// }

const AnimText = ({
  animText = 'Animation text',
  animWrapper = 'span',
  animSpeed = 40,
}) => {
  return (
    <TypeAnimation
      sequence={[animText]}
      wrapper={animWrapper}
      speed={animSpeed}
    />
  );
};

export default AnimText;
