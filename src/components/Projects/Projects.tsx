import { observer } from 'mobx-react-lite';
import Filter from '../Filter/Filter';
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid';
import Details from '../Details/Details';
import { appStore } from '../../stores/app-store';

const Projects = () => {
  return (
    <div className="main">
      {appStore.projectID === 0 ? (
        <>
          <Filter />
          <ProjectsGrid />
        </>
      ) : (
        <Details />
      )}
    </div>
  );
};

export default observer(Projects);
