import { useRef } from "react";

import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h1>Imperative Handle</h1>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
