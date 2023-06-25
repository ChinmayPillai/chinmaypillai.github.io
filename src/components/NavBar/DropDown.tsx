import { Item } from "./Item";

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
      >
        {title}
      </a>
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li>
            <a className="dropdown-item" target="_blank" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropDown;
