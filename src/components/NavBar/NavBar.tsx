import DropDown from "./DropDown";
import { Item, NavItem } from "./Item";

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
  link: "https://drive.google.com/file/d/1uBAiOoTCuEf-TIRLaVW4Zbc8pgJgmEHP/view?usp=drive_link",
};

function NavBar() {
  return (
    <nav
      className="navbar sticky-top bg-dark navbar-expand-lg"
      data-bs-theme="dark"
    >
      {/*<nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">*/}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <NavItem item={LinkedIn} />
            <NavItem item={Github} />
            <NavItem item={Resume} />
            <DropDown title="Email" items={Emails} />
            <DropDown title="Socials" items={Socials} />

            {/*<li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.linkedin.com/in/chinmay-pillai/"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://github.com/chinmaypillai"
              >
                Github
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Email
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="mailto://chinmay.pillai@gmail.com"
                  >
                    Personal - chinmay.pillai@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="mailto://chinmay20@iitk.ac.in"
                  >
                    IIT Kanpur - chinmay20@iitk.ac.in
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Socials
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://instagram.com/chinmay_sk8?igshid=ZDdkNTZiNTM="
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://www.facebook.com/chinmay.pillai/"
                  >
                    Facebook
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://www.snapchat.com/add/chinmaypillai?share_id=dCkCcIw6beo&locale=en-GB"
                  >
                    Snapchat
                  </a>
                </li>
              </ul>
            </li>*/}
            {/*<li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>*/}
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
  );
}

export default NavBar;