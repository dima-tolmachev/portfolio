import { observer } from 'mobx-react-lite';
import { appStore } from '../../stores/app-store';
import { projectObject } from '../../@types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import './style.scss';

const ProjectsGrid = () => {
  var projects: projectObject[] = appStore.projectsList;

  if (appStore.order !== 1) {
    projects = projects.filter((project) => {
      return project.type === appStore.order;
    });
  }

  return (
    <div className="grid">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default observer(ProjectsGrid);
