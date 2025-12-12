import "../Styles/JobCard.css";
import { MdDelete, MdEdit } from "react-icons/md";
function JobCard({ job, onDelete, onEdit }) {
  return (
    <>
      <div className='job-card'>
        <div className='logo-date'>
          {job.companyLogo ? (
            <img
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
              key={job.id}
              src={job.companyLogo}
              alt={job.companyName.toUpperCase().charAt(0)}
            />
          ) : (
            job.companyName.charAt(0)
          )}
          <p>{job.postedDate}</p>
        </div>
        <div className='company-name'>{job.companyName}</div>
        <div className='work-type'>
          <span className='employment-type'>{job.employmentType}</span>
          <span className='job-type'>{job.jobType}</span>
          <span className='senority'>{job.seniorityLevel}</span>
        </div>
        <div className='location-price'>
          <span>{job.location}</span>
          <span>{job.salary}</span>
        </div>
        <br />
        <div className='jobtype-btn'>
          <span>{job.jobType}</span>
          <div className='btn'>
            <button onClick={() => onEdit(job)}>
              <MdEdit style={{ color: "chocolate" }} />
            </button>
            <button onClick={() => onDelete(job.id)}>
              <MdDelete style={{ color: "red" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
