import { appStore } from '../../stores/app-store';
import redirect from '../../utils/redirect';
import Carousel from '../Carousel/Carousel';
import './style.scss';

const Introduction = () => {
  const { programmingLanguages, technologies, contacts } = appStore;

  return (
    <div className={'leftBar'}>
      <div className="card" onClick={() => (appStore.projectID = 0)}>
        <label className="hello">Hello,</label>
        <label className="short-bio">
          I'm Dima, a software developer from Moscow
        </label>
      </div>

      <Carousel
        size="large"
        title="Favorite languages"
        items={programmingLanguages}
        prompt={true}
      />
      <Carousel
        size="large"
        title="Technologies I use"
        items={technologies}
        prompt={true}
      />
      <Carousel size="large" title="Contact me" items={contacts} />

      <button
        className="card resumeLink"
        onClick={() => redirect(window, '/resume.pdf')}
      >
        Resume
      </button>
    </div>
  );
};

export default Introduction;
