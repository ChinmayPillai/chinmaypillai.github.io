import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { titleStyle, bodyStyle } from './colors';

export type Project = {
    title: string;
    des?: string;
    date?: string;
    link?: string;
};
  
interface Props {
    project: Project;
}

const theme = createTheme({
    palette: {
        background: {
          paper: '#1282A2', // your color
        },
      },
})

export default function ProjectCard({project}: Props){

    return (
        <ThemeProvider theme={theme}>
            <Card >
                <CardActionArea href={project.link ? project.link : "https://github.com/chinmaypillai" } target="_blank">
                    <CardHeader 
                        title={
                            <Typography variant="h5" color={titleStyle}>
                                {project.title}
                            </Typography>
                        }
                        subheader={
                            <Typography color={bodyStyle} >
                                {project.date}
                            </Typography>
                        }
                    />

                    <CardContent>
                        <Typography variant="body1"  color={bodyStyle} >
                            {project.des}
                        </Typography>
                    </CardContent>
                </CardActionArea>                
            </Card>
        </ThemeProvider>
            
    )
}