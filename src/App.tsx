import { useState } from "react";
import "./App.css";
import UpdatingArrays from "./components/01-ManagingState/UpdatingArrays";
import UpdatingArrayOfObjects from "./components/01-ManagingState/UpdatingArrayOfObjects";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const handleClick = () => {
  //   //This code doesn't work as we are not treating the array as immutable:
  //   // drink.price = 6;
  //   // setDrink(drink);

  //   // const newDrink = {
  //   //   title: "Americano",
  //   //   price: 6,
  //   // };

  //   //Using spread operator, instead of creating a new object like we did above
  //   setDrink({ ...drink, price: 6 });
  // };

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });

  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 98765 },
  //   });
  // };

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

    // <div>
    //   {drink.price}
    //   <button onClick={handleClick}>Click Me</button>
    // </div>

    // <div>
    //   {customer.address.zipCode}
    //   <button onClick={handleClick}>Click Me</button>
    // </div>

    // <UpdatingArrays />

    <UpdatingArrayOfObjects />
  );
}

export default App;
