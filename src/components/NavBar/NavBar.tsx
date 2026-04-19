import { Suspense, useState } from "react";
import type { MouseEvent } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PageLoader from "../Utilities/PageLoader";
import AnimatedOutlet from "../Utilities/AnimatedOutlet";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { tokens } from "../Utilities/colors";
import type { Item } from "./types";

const Emails: Item[] = [
  { name: "Personal — chinmay.pillai@gmail.com", link: "mailto:chinmay.pillai@gmail.com" },
  { name: "IIT Kanpur — chinmay20@iitk.ac.in", link: "mailto:chinmay20@iitk.ac.in" },
];

const Socials: Item[] = [
  { name: "Twitter", link: "https://twitter.com/ChinmayPillai" },
  { name: "Instagram", link: "https://instagram.com/chinmay_sk8?igshid=ZDdkNTZiNTM=" },
  { name: "Facebook", link: "https://www.facebook.com/chinmay.pillai/" },
  { name: "Snapchat", link: "https://www.snapchat.com/add/chinmaypillai?share_id=dCkCcIw6beo&locale=en-GB" },
];

const NavItems: Item[] = [
  { name: "Home", link: "/", internal: true },
  { name: "Work", link: "/work", internal: true },
  { name: "Internships", link: "/interns", internal: true },
  { name: "Projects", link: "/projects", internal: true },
  { name: "Skills", link: "/skills", internal: true },
  { name: "About", link: "/about", internal: true },
];

const GitHub: Item = { name: "Github", link: "https://github.com/chinmaypillai" };
const LinkedIn: Item = { name: "LinkedIn", link: "https://www.linkedin.com/in/chinmay-pillai/" };
const Resume: Item = {
  name: "Resume",
  link: "https://drive.google.com/file/d/1U7e5V5oUhajBXn1k45he0e7jPuybtEG8/view?usp=sharing",
};
const Blog: Item = { name: "My Tech Blog", link: "https://blog.chinmaypillai.com" };

const externalGroups = [
  { item: Blog, Icon: OpenInNewIcon },
  { item: GitHub, Icon: GitHubIcon },
  { item: LinkedIn, Icon: LinkedInIcon },
  { item: Resume, Icon: OpenInNewIcon },
];

function isActivePath(current: string, target: string) {
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}

function DropdownMenu({ title, items }: { title: string; items: Item[] }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const close = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={(e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ color: tokens.text.primary, textTransform: "none" }}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        slotProps={{
          paper: {
            sx: {
              bgcolor: tokens.bg.surface,
              border: `1px solid ${tokens.border.subtle}`,
              mt: 0.5,
            },
          },
        }}
      >
        {items.map((item) => {
          const isMail = item.link.startsWith("mailto:");
          return (
            <MenuItem
              key={item.link}
              component="a"
              href={item.link}
              {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              onClick={close}
              sx={{ color: tokens.text.primary, fontSize: 14 }}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const closeDrawer = () => setDrawerOpen(false);

  const navLinkSx = (active: boolean) => ({
    color: active ? tokens.accent : tokens.text.primary,
    textTransform: "none" as const,
    fontWeight: active ? 600 : 500,
  });

  return (
    <>
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          left: 8,
          top: 8,
          zIndex: (t) => t.zIndex.appBar + 1,
          padding: "8px 16px",
          backgroundColor: tokens.accent,
          color: tokens.bg.base,
          fontWeight: 600,
          fontSize: 14,
          borderRadius: 1,
          textDecoration: "none",
          transform: "translateY(-200%)",
          transition: "transform 150ms ease-out",
          "&:focus": { transform: "translateY(0)" },
        }}
      >
        Skip to content
      </Box>
      <AppBar
        component="nav"
        aria-label="Primary navigation"
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: tokens.bg.surface,
          borderBottom: `1px solid ${tokens.border.subtle}`,
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              color: tokens.text.heading,
              textDecoration: "none",
              fontWeight: 600,
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 2 },
            }}
          >
            CP
          </Typography>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
              flexGrow: 1,
            }}
          >
            {NavItems.map((item) => {
              const active = isActivePath(pathname, item.link);
              return (
                <Button
                  key={item.link}
                  component={RouterLink}
                  to={item.link}
                  aria-current={active ? "page" : undefined}
                  sx={navLinkSx(active)}
                >
                  {item.name}
                </Button>
              );
            })}
            <DropdownMenu title="Email" items={Emails} />
            <DropdownMenu title="Socials" items={Socials} />
          </Box>

          {/* Desktop external links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2.5,
            }}
          >
            {externalGroups.map(({ item, Icon }) => (
              <Box
                key={item.link}
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  color: tokens.text.primary,
                  textDecoration: "none",
                  transition: tokens.transition.default,
                  "&:hover": { color: tokens.accent },
                  "&:hover svg": { color: tokens.accent },
                }}
              >
                <Icon sx={{ fontSize: 18, color: tokens.text.secondary }} />
                <Typography variant="body2">{item.name}</Typography>
              </Box>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            edge="end"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: tokens.text.primary }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            bgcolor: tokens.bg.surface,
            color: tokens.text.primary,
            minWidth: 260,
            borderLeft: `1px solid ${tokens.border.subtle}`,
          },
        }}
      >
        <List sx={{ pt: 2 }}>
          {NavItems.map((item) => {
            const active = isActivePath(pathname, item.link);
            return (
              <ListItem key={item.link} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.link}
                  onClick={closeDrawer}
                  aria-current={active ? "page" : undefined}
                  sx={{
                    color: active ? tokens.accent : tokens.text.primary,
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}

          <Divider sx={{ my: 1, borderColor: tokens.border.subtle }} />

          {externalGroups.map(({ item, Icon }) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDrawer}
              >
                <ListItemIcon sx={{ minWidth: 36, color: tokens.text.secondary }}>
                  <Icon sx={{ fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ my: 1, borderColor: tokens.border.subtle }} />

          <Typography variant="overline" sx={{ px: 2, color: tokens.text.secondary }}>
            Email
          </Typography>
          {Emails.map((item) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton component="a" href={item.link} onClick={closeDrawer}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ my: 1, borderColor: tokens.border.subtle }} />

          <Typography variant="overline" sx={{ px: 2, color: tokens.text.secondary }}>
            Socials
          </Typography>
          {Socials.map((item) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDrawer}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{ outline: "none" }}
      >
        <Suspense fallback={<PageLoader />}>
          <AnimatedOutlet />
        </Suspense>
      </Box>
    </>
  );
}

export default NavBar;
