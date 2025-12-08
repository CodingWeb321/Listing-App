import "../Styles/JobPanel.css";
import JobCard from "./JobCard";

function JobPanel({ jobs, onDelete }) {
  return (
    <div className='job-panel'>
      <div className='head-container'>
        <h2>{jobs.length}Jobs</h2>
        <button className='add-job-btn'>Add New Job</button>
      </div>

      <div className='job-cards-container'>
        {jobs.map((job) => (
          <JobCard key={job.id} jobs={job} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default JobPanel;
