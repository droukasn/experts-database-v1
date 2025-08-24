import React from 'react';
import { useRouter } from 'next/router';

// Use the same expert list as index.js (ideally import from a shared data file)
const experts = [
  {
    id: 1,
    website_title: "Education Research Center",
    tags_countries: ["Jordan", "Egypt"],
    summaries_anonymous: "Seasoned specialist in educational evaluation...",
    tags_all: ["Monitoring & Evaluation", "Measurement", "Statistical Analysis"]
  },
  {
    id: 2,
    website_title: "Global Health Initiative",
    tags_countries: ["USA", "Greece"],
    summaries_anonymous: "Expert in health sector project management.",
    tags_all: ["Health", "Project Management", "International Relations"]
  },
  // ...more experts
];

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const expert = experts.find(e => e.id === Number(id));

  if (!expert) {
    return (
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h2>Expert not found.</h2>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{
        background: "#396a91", color: "#fff", padding: "32px 0",
        textAlign: "center", borderBottomLeftRadius: "60% 18%", borderBottomRightRadius: "60% 18%"
      }}>
        <h1 style={{ fontWeight: 500, fontSize: "2.2rem" }}>Experts Database</h1>
      </header>
      <main style={{ maxWidth: 700, margin: "50px auto", padding: "0 16px" }}>
        <div style={{
          background: "#eaf3fa",
          borderRadius: 14,
          boxShadow: "0 2px 12px #396a9122",
          padding: "36px 32px",
          border: "1px solid #ebeef2"
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: "1.23rem",
            color: "#396a91",
            marginBottom: "18px"
          }}>
            {/* No name, no personal info, no email */}
            {expert.website_title}
          </div>
          <div style={{
            fontSize: "1.11rem",
            color: "#1e2c55",
            marginBottom: "26px"
          }}>
            <strong>Summary:</strong>
            <div style={{ marginTop: 8 }}>
              {expert.summaries_anonymous}
            </div>
          </div>
          <div style={{ marginBottom: "26px" }}>
            <strong style={{ color: "#396a91" }}>Tags:</strong>
            <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: "9px" }}>
              {expert.tags_all.map((tag, idx) => (
                <span key={idx} style={{
                  background: "#fff",
                  color: "#396a91",
                  borderRadius: 13,
                  fontWeight: 500,
                  padding: "7px 17px",
                  fontSize: ".97rem",
                  border: "1px solid #396a91"
                }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* Contact section (same as before, no personal info) */}
          <form>
            <h4 style={{ fontWeight: 500, color: "#1e2c55", marginBottom: 10 }}>Contact us about this expert</h4>
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
              width: '100%', padding: 12, background: "#1e2c55", color: "#fff",
              borderRadius: 5, border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer'
            }}>Send message</button>
          </form>
        </div>
      </main>
    </div>
  );
}
