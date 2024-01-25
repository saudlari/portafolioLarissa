import MenuList from "./MenuList.jsx";
import CreateOrder from "./CreateOrder.jsx";
import "w3-css/w3.css";

export default function App() {
  return (
    <>
      <div class="w3-container">
        <h1>healthy food</h1>
      </div>
      <div class="w3-row">
        <div class="w3-col m4">
          <MenuList />
        </div>
        <div class="w3-col m4">
          <MenuList />
        </div>
        <div class="w3-col m4">
          <MenuList />
        </div>
      </div>
      <MenuList />

      <div class="w3-container w3-cell">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <br />
      <div class="w3-container w3-cell">
        {" "}
        <CreateOrder />
      </div>

      <br />
    </>
  );
}
