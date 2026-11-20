import image from "./assets/react.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import UserCard from "./components/usercard";

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to React JS</h1>
      <UserCard />
      <Footer />
    </div>
  );
}

export default App;
