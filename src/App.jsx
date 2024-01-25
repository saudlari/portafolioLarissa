import MenuList from "./MenuList.jsx";
import Order from "./Order.jsx";

export default function App() {
  return (
    <>
      <div class="w3-container">
        <h1>healthy food</h1>
        <div class="w3-container w3-cell">
          <MenuList />
        </div>
        <div class="w3-container w3-cell">
          <MenuList />
        </div>
        <div class="w3-container w3-cell">
          <MenuList />
        </div>
        <MenuList />
      </div>
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
      <Order />
      <br />
    </>
  );
}
