import { appStore } from '../../stores/app-store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { projectObject } from '../../@types/project';
import Brief from '../Brief/Brief';
import { observer } from 'mobx-react';

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
        className="bubble"
        onClick={(e) => {
          appStore.projectID = project.id;
        }}
        key={projectID}
        sx={{
          maxWidth: 345,
          backgroundColor: '#25272A',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="100" image={project.preview} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text">
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
