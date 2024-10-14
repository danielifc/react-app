import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css';

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
    
    // <div>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
    //   )}
    //   <Button color="danger" onClick={() => setAlertVisibility(true)}>
    //     Submit
    //   </Button>
    // </div>
  );
}

export default App;
