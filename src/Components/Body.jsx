import React from "react";
import FilterPanel from "./FilterPanel";
import JobPanel from "./JobPanel";
import "../Styles/Body.css";

function Body({
  jobs,
  onDelete,
  onJobAdded,
  onEdit,
  jobToEdit,
  onJobUpdated,
  onCloseEdit,
}) {
  return (
    <>
      <div className='container'>
        <FilterPanel />
        <JobPanel
          jobs={jobs}
          onDelete={onDelete}
          onJobAdded={onJobAdded}
          // --- edit props ---
          onEdit={onEdit}
          jobToEdit={jobToEdit}
          onJobUpdated={onJobUpdated}
          onCloseEdit={onCloseEdit}
        />
      </div>
    </>
  );
}

export default Body;
