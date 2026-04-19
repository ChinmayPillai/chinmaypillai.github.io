import type { Intern } from "../components/Utilities/types";
import Samsung from "../components/Interns/Details/Samsung";
import ACL from "../components/Interns/Details/ACL";
import IITK from "../components/Interns/Details/IITK";
import Quazar from "../components/Interns/Details/Quazar";

export const internList: Intern[] = [
  {
    title: "ML Research Intern, Samsung",
    des: "Upcoming Summer SDE Intern for SRI, Banglore",
    date: "May-July 2024",
    img: "/intern/Samsung.webp",
    name: "Samsung",
  },
  {
    title: "SDE Summer Intern, ACL Digital",
    des: "Worked on IoT, MERN Stack, Computer Networks",
    date: "May-July 2023",
    img: "/intern/ACL.webp",
    name: "ACL",
  },
  {
    title: "Computational Research Intern, IITK",
    des: "Worked on Neural Networks using PyTorch",
    date: "May 22 - May 23",
    img: "/intern/IITK.webp",
    name: "IITK",
  },
  {
    title: "SDE Winter Intern, Quazar Technologies",
    des: "Worked on C++ Drivers, Gravity Simulator, Video Processing",
    date: "Oct-Dec 2022",
    img: "/intern/Quazar.webp",
    name: "Quazar",
  },
];

export const internMap: { [key: string]: React.FC } = {
  Samsung,
  ACL,
  IITK,
  Quazar,
};
