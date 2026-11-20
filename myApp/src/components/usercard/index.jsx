import {
  FaPhoneAlt as PhoneIcon,
  FaMale as MaleIcon,
  FaFemale as FemaleIcon,
} from "react-icons/fa";
import { MdEmail as MailIcon } from "react-icons/md";
import "./usercard.css";

const UserCard = () => {
  const user = {
    name: "Harshad Kumbhar",
    city: "Kolhapur",
    phone: "767868877",
    email: "harshad@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    gender: "male",
    bio: "I am good developer, I also like to play Harmonium",
  };
  return (
    <div className="app_usercard">
      <div className="app_usercard_avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="app_usercard_info">
        <p className="app_usercard_name">{user.name}</p>
        <p className="app_usercard_bio">{user.bio}</p>
        <p>{user.city}</p>
        <p>
          <PhoneIcon />
          {user.phone}
        </p>
        <p>
          <MailIcon />
          {user.email}
        </p>
        <p className="app_usercard_gender">
          {user.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
          {user.gender}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
