import { Grid, Typography,} from "@mui/material";
import { headingStyle, textColour, highlightColour } from "../Utilities/colors";


type courseType = {
    name: string;
    courses: string[];
}

const courseList: courseType[] = [
    {
        name: "Core CS",
        courses: [
            "Computer Networks",
            "Operating Systems",
            "Database Management Systems",
            "Data Structures and Algorithms",
            "Software Engineering and Operations",
            "Blockchain Technology and Applications", 
        ]
    },
    {
        name: "Machine Learning",
        courses: [
            "Probabilistic Machine Learning",
            "Audio Representation Learning",
            "Machine Learning for Wireless Communications",
            "Intro to Machine Learning",
            "Statistical Signal Processing"
        ]
    }
];

export default function Courses(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h6" align="justify" color={textColour} >
                Below is a list of the courses I've done. 
            </Typography>
            </Grid>
            {courseList.map((courseCategory, index) => (
                <Grid key={index} item sx={{ml: 2}} md={5}>
                        <Typography variant="h4" align="justify" color={textColour}>
                            {courseCategory.name}:
                        </Typography>
                        <Typography variant="h6" align="justify" color={textColour}>
                            <ul>
                                {courseCategory.courses.map((courses) => (
                                    <li key={courses}>{courses}</li>
                                ))}
                            </ul>
                        </Typography>
                </Grid>
            ))}
        </Grid>
    )
}