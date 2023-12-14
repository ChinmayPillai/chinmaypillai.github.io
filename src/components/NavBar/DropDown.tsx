import { Item } from "./Item";
import { navStyle, navItemStyle } from "../Utilities/colors";

interface Props {
  title: string;
  items: Item[];
}

function DropDown({ title, items }: Props) {
  
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={navItemStyle}
      >
        {title}
      </a>
      <ul className="dropdown-menu" style={navStyle}>
        {items.map((item) => (
          <li>
            <a className="dropdown-item" target="_blank" href={item.link} style={navItemStyle}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropDown;
