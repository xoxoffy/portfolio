import { TypeAnimation } from 'react-type-animation';

interface Props {
  animText: string;
  animWrapper:
    | 'p'
    | 'div'
    | 'span'
    | 'strong'
    | 'a'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'aside'
    | 'b';
}

const AnimText: React.FunctionComponent<Props> = ({
  animText = 'Animation text',
  animWrapper = 'span',
}) => {
  return (
    <TypeAnimation sequence={[animText]} wrapper={animWrapper} speed={40} />
  );
};

export default AnimText;
