import React, { useEffect, useState } from "react";

const UpdatingArrayOfObjects = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  // This will run every time 'tags' changes
  useEffect(() => {
    console.log({ bugs }); // Now it will log the updated value
  }, [bugs]);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdatingArrayOfObjects;
