import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("can't decrease below zero");
      setNumber(0);
    }
  };
};

export default App;
