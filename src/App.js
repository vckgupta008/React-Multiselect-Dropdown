import React from "react";
import "./App.css";
import MultiSelectDropdown from "./container/multiSelectDropdown";

function App() {
  return (
    <div className="App">
      <MultiSelectDropdown
        dropDownList={[
          { label: "vicky", value: "vicky" },
          { label: "Vinni", value: "Vinni" },
          { label: "Ashwini", value: "Ashwini" },
          { label: "Ashwi", value: "Ashwi" },
          { label: "Virat", value: "Virat" },
          { label: "Michael", value: "Michael" }
        ]}
        placeholder='Search Options'
        showChips={true}
      />
    </div>
  );
}

export default App;
