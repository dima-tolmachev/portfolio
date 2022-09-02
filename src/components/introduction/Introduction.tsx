import { appStore } from '../../stores/app-store';
import Carousel from './Carousel';
import Contacts from './Contacts';
import Links from './Links';
import Welcome from './Welcome';
import './style.css';

const Introduction = () => {
  const { programmingLanguages, technologies } = appStore;
  return (
    <div className={'leftBar'}>
      <Welcome />
      <Carousel title="Favorite languages" items={programmingLanguages} />
      <Carousel title="Technologies I use" items={technologies} />
      <Contacts />
      <Links />
    </div>
  );
};

export default Introduction;
