import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, createTheme, ThemeProvider } from '@mui/material';
import { titleStyle, bodyStyle } from './colors';
import { useState, useContext, useEffect } from 'react';
import { internContext } from '../Interns/Interns';

declare module '@mui/material/styles' {
    interface TypeBackground {
      gradient?: string;
    }
  }


export type Intern = {
    title: string;
    des: string;
    date: string;
    img?: string;
    name: string;
};
  
interface Props {
    project: Intern;
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


export default function InternCard({project}: Props){

    const intern = useContext(internContext)

    useEffect(() => {
        if(intern == project.name)
            setGradientIndex(2);
        else if(gradientIndex != 1)
            setGradientIndex(0);
    })

    const [gradientIndex, setGradientIndex] = useState<number>(0);

    const handleMouseEnter = () => {
        if(intern != project.name){
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
                </CardActionArea>
            </Card>
        </ThemeProvider>
            
    )
}