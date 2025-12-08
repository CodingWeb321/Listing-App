import React, { useState } from "react";
import "../Styles/FilterPanel.css";

function FilterPanel(props) {
  const [search, setSearch] = useState();
  return (
    <>
      <div className='filterPanel'>
        <h2>Filter</h2>
      </div>
    </>
  );
}

export default FilterPanel;
