import { Card, Box, CardMedia, Typography, CardActionArea, ThemeProvider, createTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Item } from '../NavBar/Item';
import { useState } from 'react';
import { titleStyle, bodyStyle } from '../Utilities/colors';

interface Props {
  item: Item;
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



export default function Pages({ item }: Props){


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
        <Card sx={{ background: theme => theme.palette.background.gradient,
                    transition: 'background 0.25s ease',
					 mb: 2, mt: 2 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
          <CardActionArea
            component={RouterLink}
            to={item.link}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              p: 2,
            }}
          >
            {/* Text on left */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" color={titleStyle} component="div" sx={{ mb: 1 }}>
                {item.name}
              </Typography>
              <Typography variant="body2" color={bodyStyle}>
                {item.desc}
              </Typography>
            </Box>

            {/* Image on right */}
            <CardMedia
              component="img"
              sx={{ width: 140, height: 'auto', objectFit: 'cover', ml: 2 }}
              image={item.img}
              alt={item.name + " Image"}
            />
          </CardActionArea>
        </Card>
      </ThemeProvider>
    );
};
