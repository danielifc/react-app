import { useState } from "react";
import styles from './ListGroup.css';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

//aqui define que ListItemProps representa la forma de las propiedades del componente ListItem
const ListItem = styled.li<ListItemProps>`
  padding: 5 px 0;
  background: ${ props => props.active ? 'blue' : 'none' }
`;

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
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "list-group-item active" : "list-group-item"
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
