import BannerController from "../../components/BannerController";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserForm from "../../components/userForm";
import UsersList from "../../components/userlist";

const PracticePage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to React JS</h1>
      <UsersList />
      <Counter />
      <UserForm />
      <BannerController />
      <Footer />
    </div>
  );
};

export default PracticePage;
