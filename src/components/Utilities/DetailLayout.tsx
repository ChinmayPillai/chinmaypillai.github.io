import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface DetailProps {
  title: string;
  bullets: ReactNode[];
}

export default function DetailLayout({ title, bullets }: DetailProps) {
  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, color: "text.primary" }}>
        {bullets.map((b, i) => (
          <Typography
            key={i}
            component="li"
            variant="body1"
            sx={{ mb: 1.5 }}
          >
            {b}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

interface StrongProps {
  children: ReactNode;
}

export function Strong({ children }: StrongProps) {
  return (
    <Box component="strong" sx={{ color: "primary.main", fontWeight: 600 }}>
      {children}
    </Box>
  );
}
