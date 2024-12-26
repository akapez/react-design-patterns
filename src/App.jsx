import CurrentUserLoader from "./CurrentUserLoader";
import UserLoader from "./UserLoader";
import UserInfo from "./UserInfo";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <UserLoader userId={'2'}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={'3'}>
        <UserInfo />
      </UserLoader>
    </Fragment>
  );
}

export default App;