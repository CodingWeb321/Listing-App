import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Components/Header.jsx";
import Text from "./Components/Text.jsx";
import Body from "./Components/Body.jsx";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [jobToEdit, setJobToEdit] = useState(null); //edit

  //fetching data to load at first !
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data);
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
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      console.log(`Successfully deleted job ID: ${id}`);
    } catch (error) {
      console.log(`Error's deleting jobs:`, error);
    }
  };

  //Job Add
  const handleJobAdded = (newJob) => {
    setJobs([...jobs, newJob]);
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
      const updatedJobs = jobs.map((job) =>
        job.id === response.data.id ? response.data : job
      );
      setJobs(updatedJobs);
      setJobToEdit(null);
      alert(`Job ID: ${response.data.id} updated successfully!`);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };
  //-----------------------------------------------------------//
  return (
    <>
      <Header />
      <br />
      <Text />
      <br />
      <Body
        jobs={jobs}
        onDelete={deleteJob}
        onJobAdded={handleJobAdded}
        //edit props
        onEdit={handleEditJob}
        jobToEdit={jobToEdit}
        onJobUpdated={handleJobUpdated}
        onCloseEdit={() => setJobToEdit(null)}
      />
    </>
  );
}

export default App;
