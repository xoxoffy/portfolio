import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Project.css';

interface Props {
  img1: string | undefined;
  img2: string | undefined;
  img3: string | undefined;
}

const Project: React.FunctionComponent<Props> = ({ img1, img2, img3 }) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project">
      <div className="project-title">
        <h2>Title</h2>
      </div>
      <Slider {...settings}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Slider>
      <div className="project-description">Description</div>
    </div>
  );
};

export default Project;
