import { Fragment } from "react";
import UserInfo from "./UserInfo";
import ProductInfo from "./ProductInfo";

function App() {
  return (
    <Fragment>
      <UserInfo userId="2" />
      <UserInfo userId="3" />
      <ProductInfo productId="1" />
      <ProductInfo productId="2" />
    </Fragment>
  );
}

export default App;