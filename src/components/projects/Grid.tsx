import { observer } from 'mobx-react-lite';
import { appStore } from '../../stores/app-store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { projectObject } from '../../@types/project';

const Grid = () => {
  var projects: projectObject[] = appStore.projectsList;

  if (appStore.order !== 1) {
    projects = projects.filter((project) => {
      return project.type === appStore.order;
    });
  }

  return (
    <div className="grid">
      {projects.map((project, index) => (
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
      ))}
    </div>
  );
};

export default observer(Grid);
