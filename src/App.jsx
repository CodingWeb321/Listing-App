import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Components/Header.jsx";
import Text from "./Components/Text.jsx";
import Body from "./Components/Body.jsx";
import axios from "axios";
import JobCard from "./Components/JobCard.jsx";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoadings] = useState("true");

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

  return (
    <>
      <Header />
      <br />
      <Text />
      <br />
      <Body jobs={jobs} />
    </>
  );
}

export default App;
