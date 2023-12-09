import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export type Project = {
    title: string;
    des: string;
    date: string;
    img?: string;
};
  
interface Props {
    project: Project;
}

interface Props {
    
  }

export default function ProjectCard({project}: Props){
    return (
        <Card>
            <CardHeader 
                title={project.title}
                subheader={project.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={project.img}
                alt={project.title}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {project.des}
                </Typography>
            </CardContent>
        </Card>
    )
}