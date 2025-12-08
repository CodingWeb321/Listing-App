import "../Styles/JobCard.css";
function JobCard({ jobs, onDelete }) {
  return (
    <>
      <div className='job-card'>
        <div className='logo-date'>
          <img
            key={jobs.id}
            // src={jobs.companyName.charAt(0)}
            alt={jobs.companyName.charAt(0)}
          />
          <p>{jobs.postedDate}</p>
        </div>
        <div className='company-name'>{jobs.companyName}</div>
        <div className='work-type'>
          <span className='employment-type'>{jobs.employmentType}</span>
          <span className='job-type'>{jobs.jobType}</span>
          <span className='senority'>{jobs.seniorityLevel}</span>
        </div>
        <div className='location-price'>
          <span>{jobs.location}</span>
          <span>{jobs.salary}</span>
        </div>
        <br />
        <div className='jobtype-btn'>
          <span>{jobs.jobType}</span>
          <div className='btn'>
            <button>✏️</button>
            <button onClick={() => onDelete(jobs.id)}>🗑️</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
