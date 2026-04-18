import { Link } from "react-router-dom";
import { tokens } from "../Utilities/colors";
import type { Item } from "./types";

interface Props {
  item: Item;
}

const linkStyle = { color: tokens.text.primary };

export function NavItem({ item }: Props) {
  if (item.internal) {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={item.link} style={linkStyle}>
          {item.name}
        </Link>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
        style={linkStyle}
      >
        {item.name}
      </a>
    </li>
  );
}
