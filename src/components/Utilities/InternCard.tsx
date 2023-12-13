import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material';

export type Intern = {
    title: string;
    des: string;
    date: string;
    img?: string;
};
  
interface Props {
    project: Intern;
}

const theme = createTheme({
    palette: {
        background: {
          paper: '#1282A2', // your color
        },
      },
})

export default function InternCard({project}: Props){

    const titleStyle = "#CAF0F8";
    const bodyStyle = "#001F54";

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
                    <Typography variant="body1" color={bodyStyle} >
                        {project.des}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
            
    )
}