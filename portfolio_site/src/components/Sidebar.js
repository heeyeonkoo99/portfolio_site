// src/components/Sidebar.jsx
import React from 'react';
import { FaGithub, FaLinkedin,FaMapMarkerAlt  } from 'react-icons/fa';

const Sidebar = () => {
 return (
    <div style={styles.container}>
      <img
        src={process.env.PUBLIC_URL + '/profile_image.jpg'}
        alt="profile"
        style={styles.image}
      />
      {/* Name and Title Added */}
      <h2 style={styles.name}>Heeyeon Koo</h2>
      <p style={styles.title}>Dreaming of AI engineer</p>

{/* Link and Info List */}
      <div style={styles.infoList}>
        <div style={styles.infoItem}>
          <FaMapMarkerAlt style={styles.infoIcon} />
          <span>Dallas, TX, USA</span>
        </div>
        <a href="https://www.linkedin.com/in/heeyeon-koo" target="_blank" rel="noreferrer" style={styles.infoItem}>
          <FaLinkedin style={styles.infoIcon} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/heeyeonkoo99" target="_blank" rel="noreferrer" style={styles.infoItem}>
          <FaGithub style={styles.infoIcon} />
          <span>GitHub</span>
        </a>
        <a href={process.env.PUBLIC_URL + '/CV.pdf'} target="_blank" rel="noreferrer" style={styles.infoItem}>
          {/* We'll create a CV icon with CSS for a clean look */}
          <span style={styles.cvIcon}>CV</span>
          <span>CV</span>
        </a>
      </div>
    </div>
     
  
  );
};const styles = {
  container: {
    width: '250px',
    padding: '20px',
    display: 'flex', // Changed to flex
    flexDirection: 'column', // Arrange items vertically
    alignItems: 'center', // Center items horizontally
    textAlign: 'center', // Center text
  },
  image: {
    width: '150px', // Made the image a bit smaller
    height: '150px',
    borderRadius: '50%', // This makes the image a circle
    objectFit: 'cover', // Prevents the image from stretching
    marginBottom: '20px', // Added space below the image
  },
  name: {
    fontSize: '24px',
    fontWeight: '600',
    margin: '0',
  },
  title: {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0 25px 0', // Added space below the title
  },
  infoList: {
    width: '100%', // Take up the full width of the container
    textAlign: 'left', // Align text to the left within this list
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px', // Space between list items
    textDecoration: 'none',
    color: '#333', // Default text color
    fontSize: '14px',
  },
  infoIcon: {
    marginRight: '10px', // Space between icon and text
    width: '18px',
    height: '18px',
    color: '#555',
  },
  cvIcon: {
    marginRight: '10px',
    width: '18px',
    height: '18px',
    fontSize: '10px',
    fontWeight: 'bold',
    border: '1.5px solid #555',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Sidebar;