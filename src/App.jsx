import { Fragment } from "react";
import UserInfo from "./UserInfo";
import ProductInfo from "./ProductInfo";

function App() {
  return (
    <Fragment>
      <UserInfo userId="2" />
      <UserInfo userId="3" />
    </Fragment>
  );
}

export default App;