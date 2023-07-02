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
  if (item.internal) {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={item.link}>
          {item.name}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <a className="nav-link" target="_blank" href={item.link}>
          {item.name}
        </a>
      </li>
    );
  }
}
