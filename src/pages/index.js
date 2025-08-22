import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ExpertTable from "../components/ExpertTable";

// Example expert data
const experts = [
  {
    id: 1,
    name: "Maria Rossi",
    expertise: "Data Science, AI",
    country: "Italy",
    company: "Cross Border Talents",
    email: "maria.rossi@example.com"
  },
  {
    id: 2,
    name: "John Smith",
    expertise: "Frontend Developer",
    country: "UK",
    company: "TalentPilot",
    email: "john.smith@example.com"
  },
  {
    id: 3,
    name: "Liu Wei",
    expertise: "Cloud Architect",
    country: "China",
    company: "Cross Border Talents",
    email: "liu.wei@example.com"
  }
  // Add more experts as needed
];

function Home() {
  // Live search
  const [query, setQuery] = useState("");
  const filteredExperts = experts.filter(
    exp =>
      exp.name.toLowerCase().includes(query.toLowerCase()) ||
      exp.expertise.toLowerCase().includes(query.toLowerCase()) ||
      exp.country.toLowerCase().includes(query.toLowerCase()) ||
      exp.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ background: "#f6fafd", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 1200, margin: "auto", padding: 24 }}>
        <SearchBar onSearch={setQuery} />
        {filteredExperts.length > 0 ? (
          <ExpertTable experts={filteredExperts} />
        ) : (
          <div style={{ textAlign: "center", padding: "2rem", color: "#888" }}>
            No experts found matching your search.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
