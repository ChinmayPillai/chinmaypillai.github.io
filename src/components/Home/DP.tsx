import { Box } from "@mui/material";
import { tokens } from "../Utilities/colors";

function DP() {
  return (
    <Box
      component="img"
      src="/DP.jpg"
      alt="Chinmay Pillai"
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

// eslint-disable-next-line react-refresh/only-export-components
export default DP;
