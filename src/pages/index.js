import React from 'react';
import { useRouter } from 'next/router';

// Example data; replace with your real expert records.
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
  // ...add more experts here
];

export default function Home() {
  const router = useRouter();

  function goToProfile(id) {
    router.push(`/profile/${id}`);
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{
        background: "#396a91", color: "#fff", padding: "32px 0",
        textAlign: "center", borderBottomLeftRadius: "60% 18%", borderBottomRightRadius: "60% 18%"
      }}>
        <h1 style={{ fontWeight: 500, fontSize: "2.2rem" }}>Experts Database</h1>
      </header>
      <main style={{ maxWidth: 1200, margin: "38px auto", padding: "0 16px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px"
        }}>
          {experts.map(expert => (
            <div
              key={expert.id}
              style={{
                background: "#eaf3fa",
                borderRadius: 12,
                boxShadow: "0 2px 12px #396a9122",
                padding: "30px 28px",
                cursor: "pointer",
                transition: "box-shadow .18s",
                border: "1px solid #ebeef2"
              }}
              onClick={() => goToProfile(expert.id)}
              tabIndex={0}
              aria-label="View profile"
            >
              <div style={{
                fontWeight: 700,
                fontSize: "1.18rem",
                color: "#396a91",
                marginBottom: "12px"
              }}>
                {expert.website_title}
              </div>
              <div style={{
                fontWeight: 500,
                fontSize: "1.03rem",
                color: "#1e2c55",
                marginBottom: "5px"
              }}>
                {Array.isArray(expert.tags_countries)
                  ? expert.tags_countries.join(", ")
                  : expert.tags_countries}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
