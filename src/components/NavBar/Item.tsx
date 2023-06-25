export type Item = {
  name: string;
  link: string;
};

interface Props {
  item: Item;
}

export function NavItem({ item }: Props) {
  return (
    <li className="nav-item">
      <a className="nav-link" target="_blank" href={item.link}>
        {item.name}
      </a>
    </li>
  );
}
