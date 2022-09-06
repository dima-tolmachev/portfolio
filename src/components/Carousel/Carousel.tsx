import ReactTooltip from 'react-tooltip';
import { carousel } from '../../@types/carousel';
import redirect from '../../utils/redirect';
import './style.scss';

interface Props {
  title: string;
  items: Array<carousel> | undefined;
  prompt?: boolean;
  size: 'small' | 'medium' | 'large';
}

const Carousel = (props: Props) => {
  const { title, items, prompt, size } = props;

  return (
    <div className="card">
      {(prompt === false || prompt === undefined) && <ReactTooltip />}
      <label className="section-heading">{title}</label>
      <div className="carousel">
        {items &&
          items.map((item, index) => (
            <div
              className={`logo pressable ${size}Logo`}
              data-tip={prompt && item.title}
              onClick={() => item.link && redirect(window, item.link)}
              key={index}
              style={{
                backgroundImage: `url(${item.picPath}) `,
                backgroundOrigin: 'content-box',
                padding: '10px',
                cursor: item.link || item.copy ? 'pointer' : 'auto',
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
