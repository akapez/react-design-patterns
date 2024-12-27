import { Fragment } from "react";
import { DangerButton, SuccessButton } from "./partiallyApply";


function App() {
  return (
    <Fragment>
      <DangerButton text="Delete" />
      <SuccessButton text="Save" />
    </Fragment>
  );
}

export default App;
