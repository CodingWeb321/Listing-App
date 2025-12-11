import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Components/Header.jsx";
import Text from "./Components/Text.jsx";
import Body from "./Components/Body.jsx";
import axios from "axios";

function App() {
  const [allJobs, setAllJobs] = useState([]); // Stores the complete, unfiltered list

  // const [jobs, setJobs] = useState([]); starting jobs bye bye

  const [jobToEdit, setJobToEdit] = useState(null); //edit
  const [jobTypeFilter, setJobTypeFilter] = useState(""); // Tracks the active
  const [seniorityFilter, setSeniorityFilter] = useState("");
  const [employmentFilter, setEmploymentFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  //fetching data to load at first !

  const [showAlert, setShowAlert] = useState(null);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setAllJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  //delete logic
  const deleteJob = async (id) => {
    try {
      await axios.delete(`api/jobs/${id}`);
      const updatedJobs = allJobs.filter((job) => job.id !== id);
      setAllJobs(updatedJobs);
      console.log(`Successfully deleted job ID: ${id}`);
    } catch (error) {
      console.log(`Error's deleting jobs:`, error);
    }
  };

  //Job Add
  const handleJobAdded = (newJob) => {
    setAllJobs([...allJobs, newJob]);
  };

  //edit
  const handleEditJob = (job) => {
    setJobToEdit(job);
  };

  const handleJobUpdated = async (updatedJob) => {
    try {
      const response = await axios.put(
        `/api/jobs/${updatedJob.id}`,
        updatedJob
      );

      // Update the state with the server's response
      const updatedJobs = allJobs.map((job) =>
        job.id === response.data.id ? response.data : job
      );
      setAllJobs(updatedJobs);
      setJobToEdit(null);
      setShowAlert("Job Added Successfully");
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  // --- FILTER HANDLERS
  const handleJobTypeFilterChange = (type) => {
    setJobTypeFilter(type);
  };
  const handleSeniorityFilterChange = (level) => {
    setSeniorityFilter(level);
  };
  const handleEmploymentFilterChange = (type) => {
    setEmploymentFilter(type);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  //  FILTERING LOGIC

  const filteredJobs = allJobs.filter((job) => {
    const lowerQuery = searchQuery.toLowerCase();

    const matchesText =
      !searchQuery ||
      job.jobTitle.toLowerCase().includes(lowerQuery) ||
      job.companyName.toLowerCase().includes(lowerQuery) ||
      job.location.toLowerCase().includes(lowerQuery);

    const matchesJobType = !jobTypeFilter || job.jobType === jobTypeFilter;
    const matchesSeniority =
      !seniorityFilter || job.seniorityLevel === seniorityFilter;
    const matchesEmployment =
      !employmentFilter || job.employmentType === employmentFilter;

    return (
      matchesText && matchesJobType && matchesSeniority && matchesEmployment
    );
  });
  //-----------------------------------------------------------//
  return (
    <>
      <Header />
      <br />
      <Text />
      <br />
      <Body
        jobs={filteredJobs}
        onDelete={deleteJob}
        onJobAdded={handleJobAdded}
        //edit props
        onEdit={handleEditJob}
        jobToEdit={jobToEdit}
        onJobUpdated={handleJobUpdated}
        onCloseEdit={() => setJobToEdit(null)}
        //filter
        onJobTypeFilterChange={handleJobTypeFilterChange}
        onSeniorityFilterChange={handleSeniorityFilterChange}
        onEmploymentFilterChange={handleEmploymentFilterChange}
        onSearchChange={handleSearchChange}
      />
    </>
  );
}

export default App;
