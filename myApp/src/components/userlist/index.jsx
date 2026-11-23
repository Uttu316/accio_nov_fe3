import { USERS } from "../../data/User";
import UserCard from "../usercard";
import "./userlist.css";

const UsersList = () => {
  return (
    <div className="app_userlist">
      {USERS.map((item) => (
        <UserCard user={item} key={item.id} />
      ))}
    </div>
  );
};
export default UsersList;
