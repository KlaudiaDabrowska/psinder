import { useState } from "react";

const useDogId = () => {
  const [dogId, setDogId] = useState("");

  const setDogIdValue = (id: string) => {
    setDogId(id);
  };

  return { dogId, setDogIdValue };
};

export default useDogId;
