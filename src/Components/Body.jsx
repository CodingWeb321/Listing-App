import React from "react";
import FilterPanel from "./FilterPanel";
import JobPanel from "./JobPanel";
import "../Styles/Body.css";

function Body({ jobs, onDelete, onJobAdded }) {
  return (
    <>
      <div className='container'>
        <FilterPanel />
        <JobPanel jobs={jobs} onDelete={onDelete} onJobAdded={onJobAdded} />
      </div>
    </>
  );
}

export default Body;
