import { Outlet } from "react-router-dom";
import DropDown from "./DropDown";
import { NavItem } from "./Item";
import type { Item } from "./types";
import { tokens } from "../Utilities/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


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

const GitHub = { name: "Github", link: "https://github.com/chinmaypillai" };
const LinkedIn = { name: "LinkedIn", link: "https://www.linkedin.com/in/chinmay-pillai/" };
const Resume = {
  name: "Resume",
  link: "https://drive.google.com/file/d/1U7e5V5oUhajBXn1k45he0e7jPuybtEG8/view?usp=sharing",
};
const Blog = { name: "My Tech Blog", link: "https://blog.chinmaypillai.com" };

const navStyle = {
  backgroundColor: tokens.bg.surface,
  borderBottom: `1px solid ${tokens.border.subtle}`,
};

const iconSx = { color: tokens.text.secondary, fontSize: 18 };

const externalGroups = [
  { item: Blog, Icon: OpenInNewIcon },
  { item: GitHub, Icon: GitHubIcon },
  { item: LinkedIn, Icon: LinkedInIcon },
  { item: Resume, Icon: OpenInNewIcon },
];

function NavBar() {
  return (
    <>
      <nav
        className="navbar sticky-top fixed-top navbar-expand-lg"
        data-bs-theme="dark"
        style={navStyle}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: tokens.text.heading, fontWeight: 600 }}>
            CP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavItems.map((item) => (
                <NavItem key={item.link} item={item} />
              ))}
              <DropDown title="Email" items={Emails} />
              <DropDown title="Socials" items={Socials} />
            </ul>
            <ul className="navbar-nav d-flex">
              {externalGroups.map(({ item, Icon }, i) => (
                <li
                  key={item.link}
                  className="nav-item d-flex align-items-center"
                  style={{ marginRight: i === externalGroups.length - 1 ? 0 : 20 }}
                >
                  <a
                    className="d-flex align-items-center"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: tokens.text.primary,
                      textDecoration: "none",
                      gap: 6,
                      padding: "0.5rem 0",
                    }}
                  >
                    <Icon sx={iconSx} />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
