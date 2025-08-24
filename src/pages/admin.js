import React, { useState } from 'react';

// List of fields from your CSV header. Update this if your CSV changes.
const CSV_FIELDS = [
  "person_id", "person_expert_key", "cv_group_id", "cv_version", "cv_rank_keep", "cv_id", 
  "personalInfo_fullName", "personalInfo_email", "personalInfo_nationality", "languageDetected", 
  "website_title", "summaries_named", "summaries_anonymous", "summaries_anonymousSimple", 
  "professionalSummary", "total_experience_phrase", "mostProminentSector", "mainCountryOverall", 
  "donorExperience_hasDonorFundedExperience", "tags_all", "tags_sectors", "tags_subsectors", 
  "tags_countries", "tags_skills", "sectors_json", "subsectors_json", "tags_json", "source_filename", 
  "date_modified", "isValidCV", "is_empty_file", "file_hash_sha1", "text_hash_sha1", "page_count", 
  "word_count", "parsingConfidence", "identity_confidence", "completeness_score", "parsed_fields_count", 
  "freshness_score", "is_long_cv", "is_stale", "has_missing_identity", "error"
];

// Example initial data (update to match your real initial dataset)
const initialExperts = [
  {
    person_id: "1",
    person_expert_key: "emad_ababneh|imad ababneh@yahoo.com",
    cv_group_id: "1",
    cv_version: "1",
    cv_rank_keep: "1",
    cv_id: "f0b337a63ea6e0d844381a33ad6912f4c10bc4e2",
    personalInfo_fullName: "Emad Ababneh",
    personalInfo_email: "imad ababneh@yahoo.com",
    personalInfo_nationality: "Jordanian",
    languageDetected: "en",
    website_title: "Jordanian educational measurement and evaluation specialist, PISA national project manager, and assistant professor in Jordan.",
    summaries_named: "",
    summaries_anonymous: "",
    summaries_anonymousSimple: "",
    professionalSummary: "",
    total_experience_phrase: "30+ years",
    mostProminentSector: "Education",
    mainCountryOverall: "Jordan",
    donorExperience_hasDonorFundedExperience: "TRUE",
    tags_all: "Monitoring and Evaluation, Measurement and Evaluation, Statistical Analysis, ...",
    tags_sectors: "",
    tags_subsectors: "",
    tags_countries: "",
    tags_skills: "Monitoring and Evaluation, Measurement and Evaluation, Statistical Analysis, ...",
    sectors_json: "[]",
    subsectors_json: "[]",
    tags_json: '{"country":[],"sector":[],"subsector":[],"skill":["Monitoring and Evaluation","Measurement and Evaluation","Statistical Analysis"]}',
    source_filename: "ABABNEH,Emad_JO_DMI.docx",
    date_modified: "2018-05-07T15:43:25.000Z",
    isValidCV: "TRUE",
    is_empty_file: "FALSE",
    file_hash_sha1: "a02cddeccfd4a8583ed2e10e561ca0182aab3ce6",
    text_hash_sha1: "f0b337a63ea6e0d844381a33ad6912f4c10bc4e2",
    page_count: "6",
    word_count: "2783",
    parsingConfidence: "0.95",
    identity_confidence: "1",
    completeness_score: "0.95",
    parsed_fields_count: "23",
    freshness_score: "1",
    is_long_cv: "TRUE",
    is_stale: "TRUE",
    has_missing_identity: "FALSE",
    error: ""
  }
  // Add more rows as needed
];

const COLORS = {
  purple: '#6f45d1',
  blue: '#396a91',
  lightBlue: "#eaf3fa",
  white: "#fff",
  grey: "#f3f3f3",
  tileText: "#1a2233",
  border: "#ebeef2",
};

export default function AdminPage() {
  const [experts, setExperts] = useState(initialExperts);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  const [visibleFields, setVisibleFields] = useState(CSV_FIELDS); // All fields shown by default
  const [newExpert, setNewExpert] = useState(() =>
    Object.fromEntries(CSV_FIELDS.map(field => [field, '']))
  );
  const [bulkInput, setBulkInput] = useState('');

  // Filtering
  const filteredExperts = experts.filter(e => {
    const q = search.toLowerCase();
    return visibleFields.some(field =>
      (e[field] || '').toLowerCase().includes(q)
    );
  });

  // Add expert
  const handleAddExpert = () => {
    setExperts([...experts, newExpert]);
    setNewExpert(Object.fromEntries(CSV_FIELDS.map(field => [field, ''])));
    setShowAdd(false);
  };

  // Bulk insert: CSV (first line = header, rest are rows)
  const handleBulkInsert = () => {
    const lines = bulkInput.trim().split('\n').filter(line => line.trim());
    if (lines.length === 0) return;
    let rows = [];
    let fields = CSV_FIELDS;
    // If user pasted header, use it
    if (lines[0].split(',').length === CSV_FIELDS.length) {
      fields = lines[0].split(',').map(f => f.trim());
      lines.shift();
    }
    rows = lines.map(line => {
      const values = line.split(',');
      const row = {};
      fields.forEach((field, idx) => row[field] = values[idx] || '');
      return row;
    });
    setExperts([...experts, ...rows]);
    setBulkInput('');
    setShowBulk(false);
  };

  // Remove expert by row index
  const handleDelete = idx => {
    setExperts(experts.filter((_, i) => i !== idx));
  };

  // Column toggler
  function ColumnsDropdown() {
    return (
      <div style={{ marginBottom: 18 }}>
        <label style={{ fontWeight: 600, marginRight: 14 }}>Columns:</label>
        {CSV_FIELDS.map(field => (
          <span key={field} style={{ marginRight: 8 }}>
            <input
              type="checkbox"
              checked={visibleFields.includes(field)}
              onChange={e => {
                setVisibleFields(s =>
                  e.target.checked
                    ? [...s, field]
                    : s.filter(f => f !== field)
                );
              }}
              id={`col-toggle-${field}`}
            />
            <label htmlFor={`col-toggle-${field}`} style={{ fontSize: '.92rem', marginLeft: 2 }}>{field}</label>
          </span>
        ))}
      </div>
    );
  }

  // UI
  return (
    <div style={{ background: COLORS.white, minHeight: "100vh" }}>
      <header style={{ padding: "24px 0 12px 0", borderBottom: `2px solid ${COLORS.border}`, marginBottom: 0 }}>
        <div style={{ maxWidth: 950, margin: "0 auto", fontWeight: 700, fontSize: "2rem", color: COLORS.tileText }}>
          Expert Pool Admin
        </div>
      </header>
      <main style={{ maxWidth: 950, margin: "0 auto", padding: "38px 16px 0 16px" }}>
        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <div style={{ position: 'relative' }}>
            <button
              style={{
                background: COLORS.purple,
                color: COLORS.white,
                fontWeight: 600,
                fontSize: "1.08rem",
                borderRadius: 8,
                border: "none",
                padding: "13px 26px",
                cursor: "pointer",
                boxShadow: "0 2px 8px #6f45d122"
              }}
              onClick={() => { setShowAdd(s => !s); setShowBulk(false); }}
            >
              New Expert ▼
            </button>
            {(showAdd || showBulk) && (
              <div style={{
                position: "absolute", left: 0, top: "120%", zIndex: 10,
                background: COLORS.white, boxShadow: "0 2px 12px #5a5a5a22",
                borderRadius: 10, minWidth: 230, padding: "10px 0"
              }}>
                <div
                  style={{
                    padding: "12px 18px", cursor: "pointer", fontWeight: 500,
                    borderBottom: `1px solid ${COLORS.border}`, color: COLORS.tileText
                  }}
                  onClick={() => { setShowAdd(true); setShowBulk(false); }}
                >
                  📝 Manually add expert
                  <div style={{ fontSize: ".93rem", fontWeight: 400, color: "#444", marginTop: 2 }}>
                    Add a single expert, or autofill using resume fields
                  </div>
                </div>
                <div
                  style={{
                    padding: "12px 18px", cursor: "pointer", fontWeight: 500,
                    color: COLORS.tileText
                  }}
                  onClick={() => { setShowBulk(true); setShowAdd(false); }}
                >
                  ⬆️ Bulk upload CVs
                  <div style={{ fontSize: ".93rem", fontWeight: 400, color: "#444", marginTop: 2 }}>
                    Add multiple experts at once by uploading their resumes
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Search Bar */}
          <div style={{ marginLeft: "auto", maxWidth: 280 }}>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search expert pool"
              style={{
                width: '100%',
                padding: '11px 16px',
                borderRadius: 7,
                border: `1.5px solid ${COLORS.blue}`,
                fontSize: '1.1rem',
                background: COLORS.lightBlue,
                color: COLORS.tileText,
                marginTop: 0,
                marginBottom: 0,
                outline: 'none'
              }}
            />
          </div>
        </div>
        {/* Columns toggler */}
        <ColumnsDropdown />
        {/* Table */}
        <div style={{
          background: COLORS.white,
          borderRadius: 11,
          boxShadow: "0 2px 8px #4a4a4a10",
          border: `1px solid ${COLORS.border}`,
          overflowX: "auto"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.05rem" }}>
            <thead>
              <tr style={{ background: COLORS.grey }}>
                {visibleFields.map(field => (
                  <th key={field} style={thStyle}>{field}</th>
                ))}
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredExperts.map((expert, idx) => (
                <tr key={idx} style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                  {visibleFields.map(field => (
                    <td key={field} style={tdStyle}>
                      {typeof expert[field] === 'string' || typeof expert[field] === 'number'
                        ? expert[field]
                        : Array.isArray(expert[field])
                          ? expert[field].join(', ')
                          : JSON.stringify(expert[field])}
                    </td>
                  ))}
                  <td style={tdStyle}>
                    <button
                      style={{
                        background: "#fff",
                        color: COLORS.purple,
                        borderRadius: 7,
                        border: `1px solid ${COLORS.purple}`,
                        padding: "5px 14px",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                      onClick={() => handleDelete(idx)}
                    >Delete</button>
                  </td>
                </tr>
              ))}
              {filteredExperts.length === 0 && (
                <tr>
                  <td colSpan={visibleFields.length + 1} style={{
                    textAlign: 'center',
                    color: COLORS.blue,
                    padding: "32px"
                  }}>
                    No experts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Add Expert Modal */}
        {showAdd && (
          <div style={modalStyle}>
            <div style={modalBoxStyle}>
              <h2 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: 16 }}>Add Expert</h2>
              {CSV_FIELDS.map(field => (
                <div key={field} style={{ marginBottom: 7 }}>
                  <label style={{ fontWeight: 500, display: 'block', marginBottom: 2 }}>{field}</label>
                  <input
                    type="text"
                    value={newExpert[field]}
                    onChange={e => setNewExpert({ ...newExpert, [field]: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <button
                  style={{
                    background: COLORS.purple,
                    color: COLORS.white,
                    border: "none",
                    borderRadius: 7,
                    padding: "10px 24px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={handleAddExpert}
                >Add</button>
                <button
                  style={{
                    background: "#fff",
                    color: COLORS.purple,
                    border: `1px solid ${COLORS.purple}`,
                    borderRadius: 7,
                    padding: "10px 24px",
                    fontWeight: 500,
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={() => setShowAdd(false)}
                >Cancel</button>
              </div>
            </div>
          </div>
        )}
        {/* Bulk Insert Modal */}
        {showBulk && (
          <div style={modalStyle}>
            <div style={modalBoxStyle}>
              <h2 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 8 }}>Bulk Upload CVs</h2>
              <div style={{ color: "#444", fontSize: ".96rem", marginBottom: 12 }}>
                Paste CSV rows (<b>{CSV_FIELDS.length} columns</b>, comma separated).<br />
                <b>First row can be header</b>. All columns will be matched by order.
              </div>
              <textarea
                value={bulkInput}
                onChange={e => setBulkInput(e.target.value)}
                placeholder={`person_id,person_expert_key,cv_group_id,...\n1,emad_ababneh|imad ababneh@yahoo.com,1,...`}
                style={{ ...inputStyle, minHeight: 100, fontSize: "1.02rem" }}
              />
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <button
                  style={{
                    background: COLORS.purple,
                    color: COLORS.white,
                    border: "none",
                    borderRadius: 7,
                    padding: "10px 24px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={handleBulkInsert}
                >Bulk Insert</button>
                <button
                  style={{
                    background: "#fff",
                    color: COLORS.purple,
                    border: `1px solid ${COLORS.purple}`,
                    borderRadius: 7,
                    padding: "10px 24px",
                    fontWeight: 500,
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={() => setShowBulk(false)}
                >Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Styles
const thStyle = {
  padding: "14px 10px",
  textAlign: "left",
  color: "#3d3d3d",
  fontWeight: 600,
  fontSize: "1.04rem",
  background: "#f6f5fc",
  borderBottom: "2px solid #ebeef2"
};
const tdStyle = {
  padding: "13px 10px",
  verticalAlign: "top",
  fontSize: "1.03rem"
};
const inputStyle = {
  width: "100%",
  marginBottom: 5,
  padding: "8px 12px",
  borderRadius: 7,
  border: "1.2px solid #d0d6e2",
  fontSize: "1.02rem"
};
const modalStyle = {
  position: "fixed",
  top: 0, left: 0, width: "100vw", height: "100vh",
  background: "rgba(45,45,55,0.16)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100
};
const modalBoxStyle = {
  background: "#fff",
  borderRadius: 14,
  padding: "36px 32px 26px 32px",
  boxShadow: "0 4px 24px #6f45d144",
  minWidth: 370,
  maxWidth: 700,
  maxHeight: "80vh",
  overflowY: "auto"
};
