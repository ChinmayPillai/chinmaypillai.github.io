import { Box } from "@mui/material";
import { tokens } from "../Utilities/colors";

function BlitzImage() {
  return (
    <Box
      component="img"
      src="/blitz.webp"
      alt="Blitz logo"
      decoding="async"
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: 2,
        border: "1px solid",
        borderColor: tokens.border.subtle,
      }}
    />
  );
}

export default BlitzImage;
