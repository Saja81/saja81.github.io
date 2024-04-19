import { useContext } from "react";
import SomeContext from "../SomeContext";

function ChildKomponent() {
  const myValue = useContext(SomeContext);
  console.log(myValue);
  return (
    <>
      <p id="somecontext">{myValue.x}</p>
    </>
  );
}

export default ChildKomponent;
