import { appStore } from '../../stores/app-store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { projectObject } from '../../@types/project';

interface Props {
  project: projectObject;
  index: number;
}

const ProjectCard = (props: Props) => {
  const { project, index } = props;

  return (
    <Card
      className="bubble"
      onClick={() => {
        appStore.projectID = project.id;
      }}
      sx={{
        maxWidth: 345,
        backgroundColor: '#25272A',
        color: 'white',
        borderRadius: '5px',
      }}
      key={index}
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
  );
};

export default ProjectCard;
