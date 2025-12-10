import "../Styles/AddJobModal.css";
import AddJobForm from "./AddJobForm";

function AddJobModal({ onClose, onJobAdded }) {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-btn' onClick={() => onClose(false)}>
          ✖
        </button>
        <AddJobForm onJobAdded={onJobAdded} onClose={onClose} />
      </div>
    </div>
  );
}

export default AddJobModal;
