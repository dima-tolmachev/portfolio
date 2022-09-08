import { observer } from 'mobx-react-lite';
import Filter from '../Filter/Filter';
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid';

const Projects = () => {
  return (
    <div className="main">
      <Filter />
      <ProjectsGrid />
    </div>
  );
};

export default observer(Projects);
