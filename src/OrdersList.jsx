import "w3-css/w3.css";
import { dataOrders } from './dataOrders.js'

export default function OrdersList() {
 
    const data = dataOrders.map((d) => (
      <>
        <div class="w3-card-4" style={{ width: "50%" }}>
          <header class="w3-container w3-blue">
            <h1>Id: {d.id}</h1>
          </header>
          <div class="w3-container">
            Waiter: {d.waiter}, Paid: {d.totalPayment} $
          </div>
          <footer class="w3-container w3-blue">
            <h5>healtyFood restaurant</h5>
          </footer>
        </div>
        <br/>
      </>
    ));


    console.log(dataOrders)

//console.log(dataOrders);

// const dataToPrint = data.map(order => <p>order.id</p>)

  return (
    <>
      <div class="w3-container">
        <h1>Orders List</h1>
        <div class="w3-container">{data}</div>
      </div>
    </>
  );
}
