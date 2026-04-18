export const tokens = {
  bg: {
    base: "#0B0F19",
    surface: "#11151F",
    surfaceHover: "#161B26",
  },
  border: {
    subtle: "rgba(255,255,255,0.08)",
    strong: "rgba(255,255,255,0.16)",
    accent: "#2DD4BF",
  },
  text: {
    heading: "#F9FAFB",
    primary: "#E5E7EB",
    secondary: "#9CA3AF",
  },
  accent: "#2DD4BF",
  accentMuted: "rgba(45,212,191,0.12)",
  radius: {
    card: 12,
    pill: 999,
  },
  shadow: {
    card: "0 1px 2px rgba(0,0,0,0.4)",
    cardHover: "0 8px 24px rgba(0,0,0,0.5)",
    cardSelected: "0 0 0 1px #2DD4BF, 0 0 24px rgba(45,212,191,0.18)",
  },
  transition: {
    default: "200ms cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
} as const;
