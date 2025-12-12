import "../Styles/JobPanel.css";
import AddJobModal from "./AddJobModal";
import EditJobModal from "./EditJobModal";
import JobCard from "./JobCard";

import { useState } from "react";

function JobPanel({
  jobs,
  onDelete,
  onJobAdded,
  onEdit,
  jobToEdit,
  onJobUpdated,
  onCloseEdit,
}) {
  const [showModal, setShowmodal] = useState(false);

  return (
    <div className='job-panel'>
      <div className='head-container'>
        <h2>{jobs.length}Jobs</h2>
        <button className='add-job-btn' onClick={() => setShowmodal(true)}>
          Add New Job
        </button>
      </div>

      {showModal && (
        <AddJobModal
          onClose={setShowmodal}
          onJobAdded={onJobAdded}
        ></AddJobModal>
      )}

      {jobToEdit && (
        <EditJobModal
          job={jobToEdit} // Pass the job data
          onUpdate={onJobUpdated} // Pass the update handler (PUT request)
          onClose={onCloseEdit} // Pass the close handler
        />
      )}

      <div className='job-cards-container'>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job} //jobs changed to job
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default JobPanel;
