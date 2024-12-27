import { printProps } from './printProps';
import UserInfo from './UserInfo';

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    <UserInfoWrapped name="John" age={25} />
  );
}

export default App;