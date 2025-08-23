import Image from 'next/image';
import styles from '../styles/Logo.module.css';

export default function Home() {
  return (
    <div style={{ padding: '32px', background: '#f7fafc', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
        <img
          src="/logo.png"
          alt="Selecta logo"
          className={styles.logo}
        />
        <h1 style={{ marginLeft: '16px', fontWeight: 700, fontSize: '2.5rem', color: '#1a202c' }}>
          Selecta Talent Pool
        </h1>
      </header>
      <div style={{ marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Search experts by skill, name, or location"
          style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button style={{
          marginLeft: '12px',
          padding: '8px 20px',
          background: '#ffd700',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 700,
          cursor: 'pointer'
        }}>Search</button>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', border: '1px solid #eee' }}>Name</th>
            <th style={{ padding: '12px', border: '1px solid #eee' }}>Expertise</th>
            <th style={{ padding: '12px', border: '1px solid #eee' }}>Country</th>
            <th style={{ padding: '12px', border: '1px solid #eee' }}>Company</th>
            <th style={{ padding: '12px', border: '1px solid #eee' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Maria Rossi</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Data Science, AI</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Italy</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Cross Border Talents</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>
              <a href="mailto:maria.rossi@example.com">maria.rossi@example.com</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>John Smith</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Frontend Developer</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>UK</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>TalentPilot</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>
              <a href="mailto:john.smith@example.com">john.smith@example.com</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Liu Wei</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Cloud Architect</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>China</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>Cross Border Talents</td>
            <td style={{ padding: '12px', border: '1px solid #eee' }}>
              <a href="mailto:liu.wei@example.com">liu.wei@example.com</a>
            </td>
          </tr>
        </tbody>
      </table>
      <footer style={{ marginTop: '40px', color: '#888' }}>
        © 2025 Selecta
      </footer>
    </div>
  );
}
