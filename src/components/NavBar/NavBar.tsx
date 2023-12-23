import { Outlet } from "react-router-dom";
import DropDown from "./DropDown";
import { Item, NavItem } from "./Item";
import { navStyle } from "../Utilities/colors";


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

const NavItems: Item[] = [
    {
        name: "Home",
        link: "/#",
        internal: true,
    },{
        name: "Internships",
        link: "/interns#",
        internal: true,
    },
    {
        name: "Projects",
        link: "/projects#",
        internal: true,
    },
    {
        name: "About",
        link: "/about#",
        internal: true,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/chinmay-pillai/",
    },
    {
        name: "Github",
        link: "https://github.com/chinmaypillai",
    },
    {
        name: "Resume",
        //link: "https://drive.google.com/file/d/1U7e5V5oUhajBXn1k45he0e7jPuybtEG8/view?usp=sharing",
        link: "https://drive.google.com/file/d/1UQvnG2s63d0hqeoBAcKeOfTJZoC1asLw/view?usp=drive_link"
    },
]

function NavBar() {


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

                {NavItems.map( item => (
                    <NavItem item={item} /> 
                ) )}
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
