import React, { useEffect, useState } from "react";

const UpdatingArrays = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    // setTags([...tags, "exciting"]);

    // Remove
    // setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  // This will run every time 'tags' changes
  useEffect(() => {
    console.log({ tags }); // Now it will log the updated value
  }, [tags]);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdatingArrays;
