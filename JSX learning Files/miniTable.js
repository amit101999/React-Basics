const App = () => {
    const itemsSold = [
      { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
      { id: 2, name: "iPad Pro", price: 800, qty: 18 },
      { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
      { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
      { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
    ];

    return (
      <>
    <h1>Record of sold items</h1>
     <table border="1px" >
        <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Selling price</th>
                <th>Quantity</th>
            </tr>
            {
            itemsSold.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
            </tr>
            ))
            }
        </tbody>
        <tfooter>
             <tr>
                <td>Total Revenue</td>
            <td>${itemsSold.reduce((sum,curr)=>sum+curr.price , 0)}</td>
            </tr>
           </tfooter>
        </table>
      </>
    );
  };