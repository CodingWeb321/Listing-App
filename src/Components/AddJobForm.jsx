import { useState } from "react";
import axios from "axios";
import "../Styles/AddJobForm.css";

function AddJobForm({ onJobAdded, onClose }) {
  const initialFormData = {
    jobTitle: "",
    companyName: "",
    companyLogo: "",
    postedDate: "",
    jobType: "",
    employmentType: "",
    seniorityLevel: "",
    location: "",
    salary: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleReset() {
    setFormData(initialFormData);
  }

  function handleChange(e) {
    // console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //it's only for logo handling
  function handleLogoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          companyLogo: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const jobToSubmit = {
        ...formData,
        postedDate: new Date().toLocaleDateString(),
      };

      const response = await axios.post("api/jobs", jobToSubmit);
      if (onJobAdded) onJobAdded(response.data);
      alert("Job Added Succesfully");

      handleReset();
      onClose(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job</h2>

      {/* FULL WIDTH FIELD */}
      <div className='full-width'>
        <label htmlFor='jobTitle'>Job Title*</label>
        <input
          type='text'
          id='jobTitle'
          name='jobTitle'
          value={formData.jobTitle}
          placeholder='Enter Job Title'
          onChange={handleChange}
          required
        />
      </div>

      {/* TWO COLUMN ROW */}
      <div className='row'>
        <div>
          <label htmlFor='jobType'>Job Type*</label>
          <select
            name='jobType'
            id='jobType'
            value={formData.jobType || ""}
            onChange={handleChange}
          >
            <option value=''>Select Job Type</option>
            <option value='IT'>IT</option>
            <option value='Sales/Marketing'>Sales/Marketing</option>
            <option value='Engineer'>Engineer</option>
            <option value='Other'>Others</option>
          </select>
        </div>

        <div>
          <label htmlFor='employmentType'>Employment Type*</label>
          <select
            name='employmentType'
            id='employmentType'
            value={formData.employmentType || ""}
            onChange={handleChange}
          >
            <option value=''>Select Employment Type</option>
            <option value='FullTime'>FullTime</option>
            <option value='PartTime'>PartTime</option>
            <option value='Contract'>Contract</option>
          </select>
        </div>
      </div>

      {/* TWO COLUMN ROW */}
      <div className='row'>
        <div>
          <label htmlFor='seniorityLevel'>Seniority Level*</label>
          <select
            name='seniorityLevel'
            id='seniorityLevel'
            value={formData.seniorityLevel || ""}
            onChange={handleChange}
          >
            <option value=''>Select Level</option>
            <option value='Senior'>Senior</option>
            <option value='Mid-Level'>Mid-Level</option>
            <option value='Junior'>Junior</option>
          </select>
        </div>

        <div>
          <label htmlFor='salary'>Salary</label>
          <input
            type='number'
            name='salary'
            id='salary'
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* TWO COLUMN ROW */}
      <div className='row'>
        <div>
          <label htmlFor='companyName'>Company Name*</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={formData.companyName}
            placeholder='Enter Company Name'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor='companyLogo'>Company Logo</label>
          <input
            type='file'
            name='companyLogo'
            id='companyLogo'
            onChange={handleLogoChange}
          />
        </div>
      </div>

      {/* FULL WIDTH FIELD */}
      <div className='full-width'>
        <label htmlFor='location'>Company Location*</label>
        <input
          type='text'
          id='location'
          name='location'
          value={formData.location}
          placeholder='Enter Location'
          onChange={handleChange}
          required
        />
      </div>

      {/* BUTTONS */}
      <div className='button'>
        <button type='button' onClick={handleReset} className='cancel-btn'>
          Cancel
        </button>
        <button type='submit' className='publish-btn'>
          Publish
        </button>
      </div>
    </form>
  );
}

export default AddJobForm;
