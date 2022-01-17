import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangetext] = useState(false);

  const ChangeTextHandler = () => {
    setChangetext(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <Output>It's good to see you</Output>}
      {changeText && <Output>changed!</Output>}
      <button onClick={ChangeTextHandler}> Change text</button>
    </div>
  );
};

export default Greeting;
