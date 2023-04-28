import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Kathmandu", "Berlin"];

  
  //Hook
  //arr[0]  Variable (selectedInde)
  //arr[1]  update function
  const [selectedIndex, setSelectedIndex] = useState(-1)

  // Event Handler
  

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>no item was found</p> : null} */}
      {items.length === 0 && <p>no item was found</p>}
      {/* if before && is true --> expression after && will be executed. */}
      <ul className="list-group">
        {items.map((item, i) => (
          <li className= { selectedIndex === i ? "list-group-item active" : "list-group-item"}
          key={i} onClick={() => {setSelectedIndex(i)} }>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
