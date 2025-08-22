import React from "react";

type Expert = {
  id: number;
  name: string;
  expertise: string;
  country: string;
  company: string;
  email: string;
};

const ExpertRow: React.FC<{ expert: Expert }> = ({ expert }) => (
  <tr>
    <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{expert.name}</td>
    <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{expert.expertise}</td>
    <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{expert.country}</td>
    <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{expert.company}</td>
    <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>
      <a href={`mailto:${expert.email}`}>{expert.email}</a>
    </td>
  </tr>
);

export default ExpertRow;