import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import "./App.css";
import Like from "./components/Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

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
    <>
      <Like size="60" onLike={() => console.log("Clicked")} />
    </>
  );
}

export default App;
