import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import "./App.css";
import Like from "./components/Like";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    //This code doesn't work as we are not treating the array as immutable:
    // drink.price = 6;
    // setDrink(drink);

    // const newDrink = {
    //   title: "Americano",
    //   price: 6,
    // };

    //Using spread operator, instead of creating a new object like we did above
    setDrink({ ...drink, price: 6 });
  };

  return (
    // <BsFillCalendarFill color="red" size="60" />

    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    // <div>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
    //   )}
    //   <Button color="danger" onClick={() => setAlertVisibility(true)}>
    //     Submit
    //   </Button>
    // </div>

    //Exercise using css modules
    // <div>
    //   <Button color="primary" onClick={() => {}}>
    //     My Button
    //   </Button>
    // </div>

    //Exercise: Building a Like component
    // <>
    //   <Like size="60" onLike={() => console.log("Clicked")} />
    // </>

    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
