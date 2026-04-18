import { Box, Grid, Typography } from "@mui/material";

type CourseGroup = {
  name: string;
  courses: string[];
};

const courseList: CourseGroup[] = [
  {
    name: "Core CS",
    courses: [
      "Computer Networks",
      "Operating Systems",
      "Database Management Systems",
      "Data Structures and Algorithms",
      "Software Engineering and Operations",
      "Blockchain Technology and Applications",
    ],
  },
  {
    name: "Machine Learning",
    courses: [
      "Probabilistic Machine Learning",
      "Audio Representation Learning",
      "Machine Learning for Wireless Communications",
      "Intro to Machine Learning",
      "Statistical Signal Processing",
    ],
  },
];

export default function Courses() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6" component="p" color="text.primary">
          A list of the courses I've completed:
        </Typography>
      </Grid>
      {courseList.map((group) => (
        <Grid key={group.name} item xs={12} md={6}>
          <Typography variant="h4" component="h2" color="text.primary" sx={{ mb: 1 }}>
            {group.name}
          </Typography>
          <Box component="ul" sx={{ pl: 3, m: 0, color: "text.primary" }}>
            {group.courses.map((c) => (
              <Typography key={c} component="li" variant="body1">
                {c}
              </Typography>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
