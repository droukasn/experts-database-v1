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
        <h1 style={{
          marginLeft: '16px',
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#1a202c',
          letterSpacing: '1px'
        }}>
          Selecta Talent Pool
        </h1>
      </header>
      <div style={{ marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Search experts by skill, name, or location"
          style={{
            padding: '10px 12px',
            width: '320px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            boxSizing: 'border-box'
          }}
        />
        <button style={{
          marginLeft: '12px',
          padding: '10px 24px',
          background: '#ffd700',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 700,
          cursor: 'pointer',
          fontSize: '1rem',
          color: '#222'
        }}>Search</button>
      </div>
      <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        background: '#fff',
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)'
      }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '14px', border: '1px solid #f0f0f0', fontWeight: 600, fontSize: '1.1rem' }}>Name</th>
            <th style={{ padding: '14px', border: '1px solid #f0f0f0', fontWeight: 600, fontSize: '1.1rem' }}>Expertise</th>
            <th style={{ padding: '14px', border: '1px solid #f0f0f0', fontWeight: 600, fontSize: '1.1rem' }}>Country</th>
            <th style={{ padding: '14px', border: '1px solid #f0f0f0', fontWeight: 600, fontSize: '1.1rem' }}>Company</th>
            <th style={{ padding: '14px', border: '1px solid #f0f0f0', fontWeight: 600, fontSize: '1.1rem' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Maria Rossi</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Data Science, AI</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Italy</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Cross Border Talents</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>
              <a href="mailto:maria.rossi@example.com">maria.rossi@example.com</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>John Smith</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Frontend Developer</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>UK</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Selecta</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>
              <a href="mailto:john.smith@example.com">john.smith@example.com</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Liu Wei</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Cloud Architect</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>China</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>Cross Border Talents</td>
            <td style={{ padding: '12px', border: '1px solid #f0f0f0' }}>
              <a href="mailto:liu.wei@example.com">liu.wei@example.com</a>
            </td>
          </tr>
        </tbody>
      </table>
      <footer style={{
        marginTop: '40px',
        color: '#888',
        fontSize: '1.05rem'
      }}>
        © 2025 Selecta Talent Pool
      </footer>
    </div>
  );
}
