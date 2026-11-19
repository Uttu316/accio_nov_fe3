import image from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="app_heading">Hello</h1>
      <h2 className="app_greetings">How are you</h2>
      <h3>I am good</h3>
      <hr />
      <img src={image} className="app_image" />
      <table>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
        </tr>
        <tr>
          <td>Nirmal</td>
          <td>Pavithra</td>
          <td>Arin</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
