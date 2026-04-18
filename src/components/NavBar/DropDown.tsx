import { tokens } from "../Utilities/colors";
import type { Item } from "./types";

interface Props {
  title: string;
  items: Item[];
}

const linkStyle = { color: tokens.text.primary };
const menuStyle = {
  backgroundColor: tokens.bg.surface,
  border: `1px solid ${tokens.border.subtle}`,
};

function isMail(link: string) {
  return link.startsWith("mailto:");
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
        style={linkStyle}
      >
        {title}
      </a>
      <ul className="dropdown-menu" style={menuStyle}>
        {items.map((item) => (
          <li key={item.link}>
            {isMail(item.link) ? (
              <a className="dropdown-item" href={item.link} style={linkStyle}>
                {item.name}
              </a>
            ) : (
              <a
                className="dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                style={linkStyle}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropDown;
