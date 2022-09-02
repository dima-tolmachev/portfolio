import ReactTooltip from 'react-tooltip';
import { carousel } from '../../@types/carousel';

interface Props {
  title: string;
  items: Array<carousel> | undefined;
}

const Carousel = (props: Props) => {
  return (
    <div className="card">
      <ReactTooltip />
      <label className='section-heading'>{props.title}</label>
      <div className="carousel">
        {props.items &&
          props.items.map((item, index) => (
            <div
              className="logo"
              data-tip={item.title}
              key={index}
              style={{ backgroundImage: `url(${item.picPath})` }}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
