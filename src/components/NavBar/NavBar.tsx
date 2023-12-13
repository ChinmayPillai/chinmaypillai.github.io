import { Outlet } from "react-router-dom";
import DropDown from "./DropDown";
import { Item, NavItem } from "./Item";

const Home: Item = {
  name: "Home",
  link: "/#",
  internal: true,
};

const Experience: Item = {
  name: "Internships",
  link: "/interns#",
  internal: true,
};

const Projects: Item = {
  name: "Projects",
  link: "/projects#",
  internal: true,
};

const LinkedIn: Item = {
  name: "LinkedIn",
  link: "https://www.linkedin.com/in/chinmay-pillai/",
};

const Github: Item = {
  name: "Github",
  link: "https://github.com/chinmaypillai",
};

const Emails: Item[] = [
  {
    name: "Personal - chinmay.pillai@gmail.com",
    link: "mailto:chinmay.pillai@gmail.com",
  },
  {
    name: "IIT Kanpur - chinmay20@iitk.ac.in",
    link: "mailto:chinmay20@iitk.ac.in",
  },
];

const Socials: Item[] = [
  {
  name: "Twitter",
  link: "https://twitter.com/ChinmayPillai",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/chinmay_sk8?igshid=ZDdkNTZiNTM=",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/chinmay.pillai/",
  },
  {
    name: "Snapchat",
    link: "https://www.snapchat.com/add/chinmaypillai?share_id=dCkCcIw6beo&locale=en-GB",
  },
];

const Resume: Item = {
  name: "Resume",
  link: "https://drive.google.com/file/d/1U7e5V5oUhajBXn1k45he0e7jPuybtEG8/view?usp=sharing",
};

function NavBar() {

  const navStyle = { backgroundColor: "#0A1128" };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg"
        data-bs-theme="dark"
        style={navStyle}
      >
        {/*<nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">*/}
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
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
              {/*<li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>*/}
              <NavItem item={Home} />
              <NavItem item={Experience} />
              <NavItem item={Projects} />
              <NavItem item={LinkedIn} />
              <NavItem item={Github} />
              <NavItem item={Resume} />
              <DropDown title="Email" items={Emails} />
              <DropDown title="Socials" items={Socials} />
            </ul>
            {/*<form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>*/}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
