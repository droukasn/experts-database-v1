import React, { useState } from 'react';

// Example expert data. Replace this with your real data or fetch from your backend.
const experts = [
  {
    id: 1,
    title: 'Educational Measurement Specialist',
    country: 'Jordan',
    summary: 'Expert in educational evaluation, PISA national project manager, assistant professor.',
    skills: ['Monitoring and Evaluation', 'Measurement', 'Statistical Analysis'],
  },
  {
    id: 2,
    title: 'Higher Education Governance Expert',
    country: 'Estonia',
    summary: '30+ years experience in higher ed policy, qualifications systems.',
    skills: ['Policy Analysis', 'Quality Assurance', 'Strategic Management'],
  },
  // ...add more experts here
];

const COLORS = {
  blue: "#396a91",
  darkBlue: "#1e2c55",
  lightBlue: "#eaf3fa",
  white: "#fff",
  grey: "#f3f3f3",
  tileText: "#1a2233"
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedExpert, setSelectedExpert] = useState(null);

  // Live filtering: matches any field
  const filteredExperts = experts.filter(e => {
    const query = search.toLowerCase();
    return (
      e.title.toLowerCase().includes(query) ||
      e.country.toLowerCase().includes(query) ||
      e.summary.toLowerCase().includes(query) ||
      (e.skills.join(',').toLowerCase().includes(query))
    );
  });

  // Modal for expert profile
  function ExpertModal({ expert, onClose }) {
    if (!expert) return null;
    return (
      <div style={{
        position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh',
        background: 'rgba(30,44,85,0.34)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
      }}>
        <div style={{ background: COLORS.white, borderRadius: 12, boxShadow: '0 4px 20px #1e2c5544', padding: 36, maxWidth: 450, width: '100%', position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 14, right: 16, background: 'none', border: 'none',
              fontSize: 28, color: COLORS.darkBlue, cursor: 'pointer', fontWeight: 700
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div style={{ marginBottom: 30 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.3rem', color: COLORS.tileText }}>
                {expert.title}
              </div>
              <div style={{ fontWeight: 500, fontSize: '1.12rem', color: COLORS.blue }}>
                {expert.country}
              </div>
            </div>
          </div>
          <div style={{ fontSize: '1.07rem', color: COLORS.tileText, marginBottom: 18 }}>
            {expert.summary}
          </div>
          <div style={{ marginBottom: 22 }}>
            <strong style={{ color: COLORS.blue }}>Skills:</strong>
            <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {expert.skills.map(skill => (
                <span key={skill} style={{
                  background: COLORS.lightBlue,
                  color: COLORS.darkBlue,
                  borderRadius: 13,
                  fontWeight: 500,
                  padding: '6px 16px',
                  fontSize: '.97rem'
                }}>{skill}</span>
              ))}
            </div>
          </div>
          <form>
            <h4 style={{ fontWeight: 500, color: COLORS.darkBlue, marginBottom: 10 }}>Contact this expert</h4>
            <input type="text" placeholder="Your name" style={{
              width: '100%', marginBottom: 8, padding: 10, borderRadius: 5, border: '1px solid #d0d6e2'
            }} />
            <input type="email" placeholder="Your email" style={{
              width: '100%', marginBottom: 8, padding: 10, borderRadius: 5, border: '1px solid #d0d6e2'
            }} />
            <textarea placeholder="Your message" style={{
              width: '100%', marginBottom: 8, padding: 10, borderRadius: 5, border: '1px solid #d0d6e2'
            }} />
            <button type="button" style={{
              width: '100%', padding: 12, background: COLORS.darkBlue, color: COLORS.white,
              borderRadius: 5, border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer'
            }}>Send message</button>
          </form>
        </div>
      </div>
    );
  }

  // Responsive header
  function Header() {
    return (
      <header style={{
        width: "100%",
        background: COLORS.blue,
        color: COLORS.white,
        paddingBottom: "52px",
        paddingTop: "12px",
        position: "relative",
        borderBottomLeftRadius: "60% 18%",
        borderBottomRightRadius: "60% 18%",
        overflow: "hidden",
        marginBottom: "0"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: "0 36px",
          height: 64
        }}>
          <img
            src="/logo.png"
            alt="Site logo"
            style={{
              height: 46,
              width: 46,
              marginRight: 20,
              borderRadius: 8,
              objectFit: "contain",
              background: COLORS.white
            }}
          />
          <nav style={{ display: "flex", gap: "36px", fontWeight: 600, fontSize: "1.08rem" }}>
            <span
              style={{
                color: COLORS.white,
                borderBottom: "3px solid #fff",
                paddingBottom: "2px",
                fontWeight: 700,
                cursor: "default"
              }}
            >
              EXPERTS DATABASE
            </span>
          </nav>
        </div>
        <div style={{
          width: "100%",
          textAlign: "center",
          marginTop: "36px",
          marginBottom: "10px"
        }}>
          <h1 style={{
            color: COLORS.white,
            fontWeight: 500,
            fontSize: "2.4rem",
            letterSpacing: "1px",
            margin: 0
          }}>
            Find the right expert for your business
          </h1>
        </div>
      </header>
    );
  }

  return (
    <div style={{ background: COLORS.white, minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 18px" }}>
        <div style={{ margin: "0 auto", maxWidth: 400, marginBottom: 38 }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for skill, country, area of expertise"
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: 8,
              border: '1.5px solid #396a91',
              fontSize: '1.18rem',
              background: COLORS.lightBlue,
              color: COLORS.darkBlue,
              marginTop: 8,
              marginBottom: 6,
              outline: 'none'
            }}
            autoFocus
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginBottom: "40px"
        }}>
          {filteredExperts.length === 0 && (
            <div style={{
              background: COLORS.grey,
              color: COLORS.blue,
              fontSize: '1.12rem',
              textAlign: 'center',
              padding: '32px',
              borderRadius: 12,
              marginTop: 30
            }}>
              No experts match your search.
            </div>
          )}
          {filteredExperts.map(expert => (
            <div
              key={expert.id}
              style={{
                background: COLORS.grey,
                borderRadius: "14px",
                boxShadow: "0 2px 10px rgba(40,60,90,0.08)",
                padding: "26px 32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                minHeight: "92px",
                transition: 'box-shadow 0.18s',
                border: '1.5px solid #eaf3fa'
              }}
              onClick={() => setSelectedExpert(expert)}
            >
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: COLORS.tileText,
                  marginBottom: "4px",
                  wordBreak: "break-word"
                }}>{expert.title}</div>
                <div style={{
                  fontSize: "1.07rem",
                  color: COLORS.blue,
                  fontWeight: 500
                }}>{expert.country}</div>
                <div style={{
                  fontSize: ".98rem",
                  color: "#323e52",
                  marginTop: 5
                }}>{expert.summary}</div>
              </div>
            </div>
          ))}
        </div>
        {selectedExpert && <ExpertModal expert={selectedExpert} onClose={() => setSelectedExpert(null)} />}
      </main>
    </div>
  );
}
