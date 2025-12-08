import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Components/Header.jsx";
import Text from "./Components/Text.jsx";
import Body from "./Components/Body.jsx";
import axios from "axios";
import JobCard from "./Components/JobCard.jsx";

function App() {
  const [jobs, setJobs] = useState([]);

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

  return (
    <>
      <Header />
      <br />
      <Text />
      <br />
      <Body jobs={jobs} onDelete={deleteJob} />
    </>
  );
}

export default App;
