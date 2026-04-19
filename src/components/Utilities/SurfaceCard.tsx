import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { tokens } from "./colors";

type Aspect = "video" | "square" | "auto";

interface SurfaceCardProps {
  selected?: boolean;
  href?: string;
  to?: string;
  onClick?: () => void;
  media?: { src: string; alt: string; aspect?: Aspect };
  orientation?: "vertical" | "horizontal";
  title: string;
  subtitle?: string;
  description?: string;
  actions?: React.ReactNode;
}

const aspectRatio: Record<Aspect, string | undefined> = {
  video: "16 / 9",
  square: "1 / 1",
  auto: undefined,
};

export default function SurfaceCard({
  selected = false,
  href,
  to,
  onClick,
  media,
  orientation = "vertical",
  title,
  subtitle,
  description,
  actions,
}: SurfaceCardProps) {
  const interactive = !!(href || to || onClick);
  const isHorizontal = orientation === "horizontal";

  const cardSx = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: tokens.bg.surface,
    border: "1px solid",
    borderColor: selected ? tokens.border.accent : tokens.border.subtle,
    borderRadius: `${tokens.radius.card}px`,
    boxShadow: selected ? tokens.shadow.cardSelected : tokens.shadow.card,
    transition: tokens.transition.default,
    overflow: "hidden",
    ...(interactive && {
      cursor: "pointer",
      "&:hover": {
        borderColor: selected ? tokens.border.accent : tokens.border.strong,
        backgroundColor: tokens.bg.surfaceHover,
        boxShadow: selected
          ? tokens.shadow.cardSelected
          : tokens.shadow.cardHover,
        transform: "translateY(-2px)",
      },
      "&:active": {
        transform: "translateY(0) scale(0.985)",
        transition: "transform 80ms ease-out",
      },
    }),
  };

  const linkProps = to
    ? { component: RouterLink as React.ElementType, to }
    : href
    ? {
        component: "a" as React.ElementType,
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : onClick
    ? { onClick }
    : {};

  const body = (
    <Box
      sx={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        alignItems: isHorizontal ? "center" : "stretch",
        flex: 1,
        minHeight: 0,
        p: isHorizontal ? 2 : 0,
        gap: isHorizontal ? 2 : 0,
      }}
    >
      {media && (
        <CardMedia
          component="img"
          image={media.src}
          alt={media.alt}
          loading="lazy"
          decoding="async"
          sx={
            isHorizontal
              ? {
                  width: 140,
                  height: "auto",
                  flexShrink: 0,
                  order: 2,
                  borderRadius: 1,
                }
              : {
                  width: "100%",
                  aspectRatio:
                    aspectRatio[media.aspect ?? "auto"] ?? undefined,
                  objectFit: "cover",
                }
          }
        />
      )}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
          p: isHorizontal ? 0 : 2,
          "&:last-child": { pb: isHorizontal ? 0 : 2 },
          ...(isHorizontal && { order: 1 }),
        }}
      >
        <Typography variant="h5" component="div" color="text.primary">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Box>
  );

  return (
    <Card variant="outlined" sx={cardSx} data-selected={selected || undefined}>
      {interactive ? (
        <CardActionArea
          {...linkProps}
          disableRipple
          sx={{
            flex: 1,
            alignItems: "stretch",
            display: "flex",
            borderRadius: `${tokens.radius.card}px`,
            "& .MuiCardActionArea-focusHighlight": { opacity: 0 },
            "&:hover .MuiCardActionArea-focusHighlight": { opacity: 0 },
            "&:focus-visible": {
              outline: `2px solid ${tokens.accent}`,
              outlineOffset: 2,
            },
          }}
        >
          {body}
        </CardActionArea>
      ) : (
        body
      )}
      {actions && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 0.5,
            px: 1,
            pb: 1,
          }}
        >
          {actions}
        </Box>
      )}
    </Card>
  );
}
