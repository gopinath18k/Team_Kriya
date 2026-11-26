import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 20px',
        color: '#ffffff',
        backgroundColor: '#000000'
      }}
    >
      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '16px' }}>
        404 — Page Not Found
      </h1>
      <p style={{ maxWidth: '520px', color: '#cccccc', marginBottom: '28px', fontSize: '1.05rem' }}>
        The page you are looking for may have moved or no longer exists. Explore Team Kriya&apos;s
        digital marketing services or return to the homepage.
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{
            padding: '12px 26px',
            borderRadius: '999px',
            backgroundColor: '#ffd400',
            color: '#000000',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          Back to Home
        </Link>
        <Link
          to="/services"
          style={{
            padding: '12px 26px',
            borderRadius: '999px',
            border: '1px solid #ffd400',
            color: '#ffd400',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
