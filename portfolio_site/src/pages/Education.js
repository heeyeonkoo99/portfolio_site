// src/pages/Education.jsx
import React from 'react';
import PageContainer from '../components/PageContainer'; // PageContainer를 import 합니다.

const Education = () => {
  return (
    <PageContainer>
      <section id="education">
        <h2 style={styles.heading}>Education</h2>
 <div style={styles.entry}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
       <strong>Master of Data Science & Statistics</strong>,{' '}
            <strong>University of Texas at Dallas</strong> , TX, USA
          
          </h3>
            <p style={styles.date}> Aug. 2025 - Present</p>
          

       </div>
          {/* You can add a details list like this */}
          <ul style={styles.details}>
            <li>Concentration: Applied Statistics</li>
            <li>Scholarship: NSM McDermott Master’s Student Fellowship</li>
            <li>Currently enrolled in the graduate program.</li>
          </ul>
        </div>


  <div style={styles.entry}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
   <strong>Master of Artificial Intelligence</strong>,{' '}
            <strong>Yonsei University</strong>, Seoul, Korea
          
          </h3>
            <p style={styles.date}>Sep. 2023 - Aug. 2025</p>
          
</div>
          <ul style={styles.details}>
            <li>GPA: 4.15/4.5</li>
            <li>Undergraduate Teaching Assistant “Computer Programming” (Fall 2024)</li>
            <li>Scholarship: Graduate School of Artificial Intelligence Admission Scholarship (Fall 2023)</li>
             {/* ICL Lab item with a nested list inside */}
          

          </ul>
        </div>
  <div style={styles.entry}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
        <strong>Bachelor of Computer Science and Engineering</strong>,{' '}
            <strong>Kyung Hee University</strong>, Seoul, Korea
         
          </h3>
            <p style={styles.date}>Mar. 2018 - Feb. 2023</p>
          
</div>
          <ul style={styles.details}>
            <li>GPA: 3.91/4.5</li>
            <li>Scholarships: Academic Excellence Scholarship (Spring 2018); Software Scholarship (Spring 2022)</li>

          </ul>
        </div>
      </section>
    </PageContainer>
  );
};

// --- STYLES ---
// Add this styles object to control the look and feel
const styles = {
  heading: {
    fontSize: '2em', // Makes "Education" title larger
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '25px',
  },
  entry: {
    marginBottom: '25px', // Adds space between each university entry
  },
  date: {
    fontSize: '0.9em',
    color: '#666', // A lighter color for the date
    marginBottom: '4px',
  },
  degree: {
    fontSize: '1.1em',
    fontWeight: 'normal', // We use <strong> for bold parts, so the base font is normal
    margin: '0',
  },
  details: {
    listStylePosition: 'outside',
    paddingLeft: '20px', // Indents the bullet points
    marginTop: '8px',
    color: '#444',
  },
};

export default Education;