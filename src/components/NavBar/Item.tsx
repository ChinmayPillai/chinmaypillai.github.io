import { Link } from "react-router-dom";

export type Item = {
  name: string;
  link: string;
  internal?: boolean;
};

interface Props {
  item: Item;
}

export function NavItem({ item }: Props) {

  const navItemStyle = {color: "#CAF0F8"};

  if (item.internal) {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={item.link} style={navItemStyle}>
          {item.name}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <a className="nav-link" target="_blank" href={item.link} style={navItemStyle}>
          {item.name}
        </a>
      </li>
    );
  }
}
