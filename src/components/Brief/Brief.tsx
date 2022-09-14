import { projectObject } from '../../@types/project';
import './style.scss';

interface Props {
  project: projectObject;
}

const Brief = (props: Props) => {
  const { project } = props;

  return (
    <div className="brief">
      <h3>Description</h3>
      <p>{project.description}</p>
      <h3>Stack</h3>
      <p>
        {project.stack.map((el) => {
          return (
            <img
              src={el.picPath}
              alt={el.title}
              width="25px"
              style={{ marginRight: '10px' }}
            />
          );
        })}
      </p>

      <h3>Commercial?</h3>
      <p>{project.type === 2 ? "Yes" : "No"}</p>
      
      {project.links && <h3>Links</h3>}
      {project.links?.map(el => {
        return (
          <a className="project-link" href={el.url}>{el.label}</a>
        );
      })}
    </div>
  );
};

export default Brief;
