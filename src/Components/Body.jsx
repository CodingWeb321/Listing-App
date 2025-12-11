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
  onJobTypeFilterChange,
  onSeniorityFilterChange,
  onEmploymentFilterChange,
  onSearchChange,
}) {
  return (
    <>
      <div className='container'>
        <FilterPanel
          onJobTypeFilterChange={onJobTypeFilterChange}
          onSeniorityFilterChange={onSeniorityFilterChange}
          onEmploymentFilterChange={onEmploymentFilterChange}
          onSearchChange={onSearchChange}
        />
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
