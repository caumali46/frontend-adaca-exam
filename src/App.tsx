import React, { useState } from "react";
import "./App.css";
import CreateOrder from "./pages/CreateOrder";
import SelectedMenu from "./pages/SelectedMenu";

function App() {
  console.log("rerender");
  const [selectedItemDetails, setSelectedItemDetails] = useState<
    { id: string; value: string }[]
  >([]);

  return (
    <div className="app">
      <SelectedMenu items={selectedItemDetails} />
      <CreateOrder setSelectedItemDetails={setSelectedItemDetails} />
    </div>
  );
}

export default App;
