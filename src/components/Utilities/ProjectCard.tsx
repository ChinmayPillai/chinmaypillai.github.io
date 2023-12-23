import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { titleStyle, bodyStyle } from './colors';


declare module '@mui/material/styles' {
    interface TypeBackground {
      gradient?: string;
    }
  }

export type Project = {
    title: string;
    des?: string;
    date?: string;
    link?: string;
};
  
interface Props {
    project: Project;
}

// const theme = createTheme({
//     palette: {
//         background: {
//           paper: '#1282A2', // your color
//         },
//       },
// })

const gradientColors = [
    ['#2A6F97', '#014F86'], // Initial gradient
    ['#1282A2', '#00BFFF'], // Hover gradient
    ['#1282A2', '#06d6a0'], // Click gradient
    // ['#1282A2', '#00BFFF'], // Initial gradient
    // ['#1282A2', '#034078'], // Hover gradient
    // ['#1282A2', '#06d6a0'], // Click gradient

    //['#4CAF50', '#FFD700'], // Hover gradient
    //['#FF4500', '#8A2BE2'], // Click gradient
  ];

export default function ProjectCard({project}: Props){

    const [gradientIndex, setGradientIndex] = useState<number>(0);

    const handleMouseEnter = () => {
        setGradientIndex(1); // Set to the second gradient on hover
    };

    const handleMouseLeave = () => {
        setGradientIndex(0); // Set back to the initial gradient on mouse leave
    };

    const theme = createTheme({
        palette: {
            background: {
                gradient: `linear-gradient(45deg, ${gradientColors[gradientIndex][0]}, ${gradientColors[gradientIndex][1]})`,
            },
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <Card 
                sx={{
                    background: theme => theme.palette.background.gradient,
                    transition: 'background 0.25s ease',
                    // '&:hover': {
                    //   cursor: 'pointer',
                    //   background: `linear-gradient(45deg, ${gradientColors[1][0]}, ${gradientColors[1][1]})`,
                    // },
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
            >
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