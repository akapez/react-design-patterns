import { Fragment, useState } from "react";
import ControlledModal from "./ControlledModal";
import UncontrolledModal from "./UncontrolledModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <ControlledModal isOpen={showModal} onRequestClose={() => setShowModal(false)} />
      <button
        onClick={() => setShowModal(!showModal)}>
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
    </Fragment>
  );
}

export default App;
