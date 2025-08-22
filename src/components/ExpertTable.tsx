import React from "react";
import ExpertRow from "./ExpertRow";

type Expert = {
  id: number;
  name: string;
  expertise: string;
  country: string;
  company: string;
  email: string;
};

const ExpertTable: React.FC<{ experts: Expert[] }> = ({ experts }) => (
  <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
    <thead>
      <tr>
        <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Name</th>
        <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Expertise</th>
        <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Country</th>
        <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Company</th>
        <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Email</th>
      </tr>
    </thead>
    <tbody>
      {experts.map((exp) => (
        <ExpertRow key={exp.id} expert={exp} />
      ))}
    </tbody>
  </table>
);

export default ExpertTable;