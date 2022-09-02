import { appStore } from '../../stores/app-store';

const Welcome = () => {
  return (
    <div
      onClick={() => {
        appStore.projectID = 0;
      }}
      className="card"
    >
      <label className="hello">Hello,</label>
      <label className="short-bio">I'm Dima, a programmer from Moscow</label>
    </div>
  );
};

export default Welcome;
