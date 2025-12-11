import React, { useState } from "react";
import "../Styles/FilterPanel.css";

function FilterPanel({
  onJobTypeFilterChange,
  onSeniorityFilterChange,
  onEmploymentFilterChange,
  onSearchChange,
}) {
  // Local state for filter boxes
  const [activeType, setActiveType] = useState("");
  const [activeSeniority, setActiveSeniority] = useState("");
  const [activeEmployment, setActiveEmployment] = useState("");

  // Local state for text search input
  const [searchText, setSearchText] = useState("");

  const jobTypes = [
    { value: "", label: "All Types" },
    { value: "It", label: "IT" },
    { value: "Sales/Marketing", label: "Sales/Marketing" },
    { value: "Engineer", label: "Engineer" },
    { value: "Other", label: "Other" },
  ];
  const seniorityLevels = [
    { value: "", label: "All Levels" },
    { value: "Senior", label: "Senior" },
    { value: "Mid-Level", label: "Mid-Level" },
    { value: "Junior", label: "Junior" },
  ];

  const employmentTypes = [
    { value: "", label: "All Contracts" },
    { value: "FullTime", label: "Full Time" },
    { value: "PartTime", label: "Part Time" },
    { value: "Contract", label: "Contract" },
  ];

  // --- HANDLERS ---
  const handleTypeChange = (value) => {
    setActiveType(value);
    onJobTypeFilterChange(value);
  };

  const handleSeniorityChange = (value) => {
    setActiveSeniority(value);
    onSeniorityFilterChange(value);
  };

  const handleEmploymentChange = (value) => {
    setActiveEmployment(value);
    onEmploymentFilterChange(value);
  };

  // Handler for text input
  const handleTextSearchChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    onSearchChange(query);
  };

  return (
    <div className='filter-panel'>
      <h3>Filter Jobs</h3>
      <div className='filter-group'>
        <label htmlFor='textSearch'>Search Keywords</label>
        <input
          type='text'
          id='textSearch'
          placeholder='e.g., React, Backend, Marketing'
          className='search-input'
          value={searchText}
          onChange={handleTextSearchChange}
        />
      </div>

      {/* Job Type Filter - */}
      <div className='filter-group'>
        <label>Job Type*</label>
        <div className='filter-buttons-container'>
          {jobTypes.map((type) => (
            <button
              key={type.value}
              className={
                type.value === activeType ? "filter-box active" : "filter-box"
              }
              onClick={() => handleTypeChange(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Seniority Level Filter (NEW) */}
      <div className='filter-group'>
        <label>Seniority Level*</label>
        <div className='filter-buttons-container'>
          {seniorityLevels.map((level) => (
            <button
              key={level.value}
              className={
                level.value === activeSeniority
                  ? "filter-box active"
                  : "filter-box"
              }
              onClick={() => handleSeniorityChange(level.value)}
            >
              {level.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Employment Type Filter (NEW) */}
      <div className='filter-group'>
        <label>Employment Type*</label>
        <div className='filter-buttons-container'>
          {employmentTypes.map((type) => (
            <button
              key={type.value}
              className={
                type.value === activeEmployment
                  ? "filter-box active"
                  : "filter-box"
              }
              onClick={() => handleEmploymentChange(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FilterPanel;
