import image from "./assets/react.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import UsersList from "./components/userlist";

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to React JS</h1>
      <UsersList />
      <Footer />
    </div>
  );
}

export default App;
