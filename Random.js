let customers = [];
const capacity = 25;
let seatsLeft = 25;
let user = [];
let GuestName = "";
let count = 0;
let checkIn = 0;
let checkOut;
let number = 0;
let entry = "";
let errorMsg = "";

// Create form submit handler here

//checking out
const guestCheckOut = (e, num) => {
  // e.target.innerHTML = "served";
  // let node = e.target.parentElement;
  // console.log(node);
  // node.children[4].innerHTML = formatAMPM(new Date());

  user.forEach((item) => {
    if (item.number == num) {
      item.checkOut = new Date();
    }
  });

  rootElement.render(<App />);
};

// deleting row
const deleteRow = (e, index) => {
  errorMsg = "";
  user.splice(index, 1);
  rootElement.render(<App />);
};

//getting time
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var resultInSeconds = date.getUTCSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + ":" + resultInSeconds + ampm;
  return strTime;
}

//form submission
const submitHandler = (e) => {
  errorMsg = "";
  console.log(seatsLeft < count);

  count = e.target.count.value;
  seatsLeft -= count;

  GuestName = e.target.name.value;
  number = e.target.number.value;
  entry = "Delete";

  checkIn = formatAMPM(new Date());
  checkOut = "-";
  user.unshift({ count, GuestName, number, checkIn, checkOut: null });

  rootElement.render(<App />);
};

//form
const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (seatsLeft < e.target.count.value || e.target.count.value <= 0) {
          errorMsg = "Seat Limit Exceeds";
          rootElement.render(<App />);
        } else {
          submitHandler(e);
        }
      }}
    >
      <input type="number" placeholder="Guest Count" name="count" />
      <input type="text" placeholder="Primary Guest Name" name="name" />
      <input type="number" placeholder="Phone Number" name="number" />
      <button>Add Entry</button>
      <p>{errorMsg}</p>
    </form>
  );
};

//main App
const App = () => (
  <div className="App" style={{ textAlign: "center" }}>
    <div>
      <h2>Total Capacity: {capacity}</h2>
      <h2>Seats Left: {seatsLeft}</h2>
    </div>

    {/* Create a form here */}
    <Form />

    {/* Complete table to show records of customers */}
    <table border="1px" style={{ margin: "auto" }}>
      <thead>
        <th>Count</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Check In</th>
        <th>check Out</th>
        <th>Status</th>
        <th>Remove Entry</th>
      </thead>
      <tbody>
        {user.map((item, index) => (
          <tr key={index}>
            <th>{item.count}</th>
            <th>{item.GuestName}</th>
            <th>{item.number}</th>
            <th>{checkIn}</th>
            {/* <th id="checkOut">{checkOut}</th>
            <th onClick={(e) => guestCheckOut(e)} name="btn">
              Click to Checkout
            </th> */}
            {item.checkOut ? (
              <th>{item.checkOut.toLocaleTimeString()}</th>
            ) : (
              <th>-</th>
            )}
            {item.checkOut ? (
              <th>Served</th>
            ) : (
              <th onClick={(e) => guestCheckOut(e, item.number)}>
                "click here to checkout"
              </th>
            )}
            <th
              onClick={(e) => {
                seatsLeft += Number(item.count);
                deleteRow(e, index);
              }}
            >
              {entry}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
