import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material';

export type Project = {
    title: string;
    des: string;
    date: string;
    img?: string;
};
  
interface Props {
    project: Project;
}

const theme = createTheme({
    palette: {
        background: {
          paper: '#bfdbf7', // your color
        },
      },
})

export default function ProjectCard({project}: Props){
    return (
        <ThemeProvider theme={theme}>
            <Card >
                <CardMedia
                    component="img"
                    height = "100%"
                    image={project.img}
                    alt={project.title}
                />

                
                <CardHeader 
                    title={project.title}
                    subheader={project.date}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary" >
                        {project.des}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
            
    )
}