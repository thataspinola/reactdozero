import { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando itens ....");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      <h1>List</h1>

      {myItems && myItems.map((item) => <p key={item.id}>{item}</p>)}
    </div>
  );
};

export default List;
