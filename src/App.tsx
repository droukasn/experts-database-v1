import React, { useEffect, useState } from "react";
import ExpertTable from "./components/ExpertTable";

const fetchExperts = async (): Promise<any[]> => {
  const response = await fetch("/src/data/experts.json");
  return response.json();
};

const App: React.FC = () => {
  const [experts, setExperts] = useState<any[]>([]);

  useEffect(() => {
    fetchExperts().then(setExperts);
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Experts Database</h1>
      <ExpertTable experts={experts} />
    </div>
  );
};

export default App;