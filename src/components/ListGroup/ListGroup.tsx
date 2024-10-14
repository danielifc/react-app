import { useState } from "react";
import styles from './ListGroup.module.css';

// {items: [], heading: string}
//Aqui define los parametros que se enviaran a este componente!!
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  //este codigo es equivalente a:
  //onSelectItem(item: string): void;
}

//Hizo el destructuring de Props aqui:
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(' ')}  >
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
