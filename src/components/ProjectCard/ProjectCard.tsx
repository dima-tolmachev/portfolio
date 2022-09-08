import { appStore } from '../../stores/app-store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { projectObject } from '../../@types/project';
import Brief from '../Brief/Brief';
import { observer } from 'mobx-react';
import './style.scss';

interface Props {
  project: projectObject;
}

const ProjectCard = (props: Props) => {
  const { project } = props;
  const { projectsList, projectID } = appStore;
  const target = projectID ? projectsList[projectID - 1] : undefined;

  return (
    <>
      <Card
        className={`project-card ${(project.id === projectID ? 'selected' : '')}`}
        onClick={(e) => {
          appStore.projectID = project.id;
        }}
        key={projectID}
      >
        <CardActionArea>
          <CardMedia component="img" height="100" image={project.preview} />
          <CardContent>
            <Typography gutterBottom variant="h6" >
              {project.title}
            </Typography>
            <Typography>
              {project.brief}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {project.id === projectID && target && <Brief project={target} />}
    </>
  );
};

export default observer(ProjectCard);
