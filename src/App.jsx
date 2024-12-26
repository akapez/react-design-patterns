import { Fragment } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import DataSource from "./DataSource";

const getServerData = url => async () => {
  const response = await axios.get(`api/${url}`);
  const data = response.data;
  return data;
};


function App() {
  return (
    <Fragment>
      <DataSource getDataFunc={getServerData('users/2')} resourceName="currentUser">
        <UserInfo />
      </DataSource>
    </Fragment>
  );
}

export default App;