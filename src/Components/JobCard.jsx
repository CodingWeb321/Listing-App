import "../Styles/JobCard.css";
import { MdDelete, MdEdit } from "react-icons/md";
function JobCard({ jobs, onDelete, onEdit }) {
  return (
    <>
      <div className='job-card'>
        <div className='logo-date'>
          {jobs.companyLogo ? (
            <img
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
              key={jobs.id}
              src={jobs.companyLogo}
              alt={jobs.companyName.toUpperCase().charAt(0)}
            />
          ) : (
            jobs.companyName.charAt(0)
          )}
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
            <button onClick={() => onEdit(jobs)}>
              <MdEdit style={{ color: "chocolate" }} />
            </button>
            <button onClick={() => onDelete(jobs.id)}>
              <MdDelete style={{ color: "red" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
