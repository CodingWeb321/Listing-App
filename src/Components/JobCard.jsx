import "../Styles/JobCard.css";
function JobCard({ jobs }) {
  console.log(jobs);

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
          <span className='location'>OnSite</span>
          <span className='skills'>{jobs.seniorityLevel}</span>
          <span className='employment-type'>{jobs.employmentType}</span>
        </div>
        <div className='location-price'>
          <span>{jobs.location}</span>
          <span>{jobs.salary}</span>
        </div>
        <br />
        <div className='jobtype-btn'>
          <span>{jobs.jobType}</span>
          <div className='btns'>
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
