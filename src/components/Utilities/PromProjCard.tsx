import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea, createTheme, ThemeProvider } from '@mui/material';
import { titleStyle, bodyStyle } from './colors';
import { useState, useContext, useEffect } from 'react';
import { projContext } from '../Projects/Projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Props } from './ProjectCard';

declare module '@mui/material/styles' {
    interface TypeBackground {
      gradient?: string;
    }
  }

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


export default function PromProjCard({project}: Props){

    const proj = useContext(projContext)

    const [gradientIndex, setGradientIndex] = useState<number>(0);

    useEffect(() => {
        if(proj == project.title)
            setGradientIndex(2);
        else if(gradientIndex != 1)
            setGradientIndex(0);
    })

    const handleMouseEnter = () => {
        if(proj != project.title){
            setGradientIndex(1); // Set to the second gradient on hover
        }
    };

    const handleMouseLeave = () => {
        setGradientIndex(0); // Set back to the initial gradient on mouse leave
    };

    // const handleClick = () => {
    //     setGradientIndex(2); // Set to the third gradient on click
    // };

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
                //   onClick={handleClick}
            >
                <CardActionArea>
                    {project.img && (<CardMedia
                        component="img"
                        height = "100%"
                        image={project.img}
                        alt={project.title}
                    />)}

                    
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

                    <Box
                        sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingRight: 1, // Adjust the padding as needed
                        }}
                    >
                        {project.hostedLink ? (
                            <Button size="small" color="primary" sx={{ mb: 1, px:0 }} href={project.hostedLink } target="_blank">
                                <OpenInNewIcon sx={{ color: 'white' }} />
                            </Button>
                        ) : null
                        }
                        
                        <Button size="small" color="primary" sx={{ mb: 1, px:0 }} href={project.link ? project.link : "https://github.com/chinmaypillai" } target="_blank">
                            <GitHubIcon sx={{ color: 'white' }} />
                        </Button>
                    </Box>
                </CardActionArea>

            </Card>
        </ThemeProvider>
            
    )
}