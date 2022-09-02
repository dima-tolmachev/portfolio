import { observer } from 'mobx-react-lite';
import Filter from './Filter';
import Grid from './Grid';
import Details from './Details';
import { appStore } from '../../stores/app-store';

const Projects = () => {
  return (
    <div className="main">
      {appStore.projectID === 0 ? (
        <>
          <Filter />
          <Grid />
        </>
      ) : (
        <Details />
      )}
    </div>
  );
};

export default observer(Projects);
