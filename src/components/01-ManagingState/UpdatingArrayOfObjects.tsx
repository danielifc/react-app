import React, { useEffect, useState } from "react";
import produce from "immer";

const UpdatingArrayOfObjects = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  // This will run every time 'tags' changes
  useEffect(() => {
    console.log({ bugs }); // Now it will log the updated value
  }, [bugs]);

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "No fixed"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdatingArrayOfObjects;
