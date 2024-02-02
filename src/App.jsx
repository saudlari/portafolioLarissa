import MenuList from "./MenuList.jsx";
import OrderButton from "./OrderButton.jsx";
import OrderData from "./OrderData.jsx";
import CreateFakeOrders from "./CreateFakeOrders.jsx";
import OrdersList from './OrdersList.jsx'


const menus = [
  {
    id: "M001",
    name: "Menu Lisboa",
    contents: [
      "Meat Balls",
      "Salad with tomato",
      "Onion and carrot",
      "Fresh Tuna",
    ],
    price: 80.0,
    active: true,
    water: true,
  },
  {
    id: "M002",
    name: "Menu New York",
    contents: [
      "Meat Balls with Pulled Steak",
      "Salad with tomato",
      "Brown Rice",
      "Fresh Salmon",
    ],
    price: 85.0,
    active: true,
    water: true,
  },
  {
    id: "M003",
    name: "Menu Santiago",
    contents: [
      "Meat Chicken Curry",
      "Salad with tomato",
      "Carrot with edamame",
      "Fresh Tuna",
    ],
    price: 82.0,
    active: true,
    water: true,
  },
];


export default function App() {

const displayJSON = true;

if (displayJSON) {
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

      <OrderData menu={menus[2]} />
      <OrderButton />
      <br />

      <OrdersList />
    </>
  );
} else {
  return (
    <>
      <div class="w3-container">
        <CreateFakeOrders />
      </div>
    </>
  );
}
}
