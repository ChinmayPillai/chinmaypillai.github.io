import { Item } from "./Item";

interface Props {
  title: string;
  items: Item[];
}

function DropDown({ title, items }: Props) {

  const navStyle = { backgroundColor: "#0A1128" };
  const navItemStyle = {color: "#CAF0F8"};
  
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
