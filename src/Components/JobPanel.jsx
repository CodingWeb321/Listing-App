import "../Styles/JobPanel.css";
import AddJobModal from "./AddJobModal";
import JobCard from "./JobCard";

import { useState } from "react";

function JobPanel({ jobs, onDelete, onJobAdded }) {
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

      <div className='job-cards-container'>
        {jobs.map((job) => (
          <JobCard key={job.id} jobs={job} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default JobPanel;
