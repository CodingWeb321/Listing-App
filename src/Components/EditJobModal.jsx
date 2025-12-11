import "../Styles/AddJobModal.css"; // Reuse the same styles
import EditJobForm from "./EditJobForm";

function EditJobModal({ onClose, job, onUpdate }) {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-btn' onClick={onClose}>
          ✖
        </button>

        <EditJobForm job={job} onUpdate={onUpdate} onClose={onClose} />
      </div>
    </div>
  );
}

export default EditJobModal;
