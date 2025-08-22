import React, { useEffect, useState } from "react";

// Loads columns from display_columns.json
const fetchDisplayColumns = async (): Promise<string[]> => {
  const response = await fetch("/display_columns.json");
  return response.json();
};

interface ExpertRecord {
  [key: string]: any;
}

interface Props {
  experts: ExpertRecord[];
}

const ExpertTable: React.FC<Props> = ({ experts }) => {
  const [displayColumns, setDisplayColumns] = useState<string[]>([]);

  useEffect(() => {
    fetchDisplayColumns().then(setDisplayColumns);
  }, []);

  if (displayColumns.length === 0) return <div>Loading columns...</div>;

  return (
    <table>
      <thead>
        <tr>
          {displayColumns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {experts.map((expert, idx) => (
          <tr key={expert.person_id || idx}>
            {displayColumns.map((col) => (
              <td key={col}>{expert[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpertTable;