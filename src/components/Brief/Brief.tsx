import { projectObject } from '../../@types/project';
import './style.scss';

interface Props {
  project: projectObject;
}

const Brief = (props: Props) => {
  const { project } = props;

  return (
    <div className="brief">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
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
    </div>
  );
};

export default Brief;
