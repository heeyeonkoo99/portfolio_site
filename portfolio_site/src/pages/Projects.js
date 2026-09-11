import React from 'react';
import PageContainer from '../components/PageContainer'; // PageContainer를 import 합니다.


//<p>UTD에서 과목들으면서 한 프로젝트..?추가..?</p>
const Projects = () => {
  return (
    <PageContainer>
    <section id="projects" >
      <h2 style={styles.heading}>Project</h2>

       <div style={styles.entry}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>Ontology Engineering</strong>
          </h3>
            <p style={styles.date}>   Sep. 2024 - Dec. 2024</p>
          {/* You can add a details list like this */}
         </div>
          <ul style={styles.details}>
            <li>Led a 3-member team as project leader for one semester in the Ontology Engineering course.</li>
            <li>Developed the OMC (Obesity-associated Morbidity Care) ontology in OWL to recommend essential nutrition and prevent obesity-related diseases.</li>
            <li>Visualized the knowledge graph using GraphDB and formulated competency questions in SPARQL to identify potential errors.</li>
 <br />
        
    <a href={process.env.PUBLIC_URL + '/ontology_presentation.ppt'} target="_blank" rel="noreferrer"    style={{ color: '#52adc8', textDecoration: 'underline' }}>📝 View PowerPoint (Written in Korean) 
    </a>
    <br/>
    <a 
  href={process.env.PUBLIC_URL + '/ontology_Demo.mp4'} 
  target="_blank" 
  rel="noreferrer"
  style={{ color: '#52adc8', textDecoration: 'underline' }}
>
  🎥 Watch Demo Video
</a>
          </ul>
          </div>

     
        <div style={styles.entry}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>Capstone Design</strong>
    </h3>
    <p style={styles.date}>Sep. 2022 - Dec. 2022</p>

  </div>
         
          <ul style={styles.details}>
            <li>Analyzed compression techniques in Digital Holographic Microscopy (DHM), showing phase-based compression outperforms direct fringe pattern compression.</li>
  <li>Compared traditional phase unwrapping algorithms (Puma & DCT) with deep learning-based approaches for improved accuracy in phase retrieval.</li>
  <li>Implemented and evaluated a Res-UNet model, leveraging residual and U-Net architectures for robust phase unwrapping and performance benchmarking.</li>
<br/>
           <a href={process.env.PUBLIC_URL + '/capstone_design2.ppt'} target="_blank" rel="noreferrer"    style={{ color: '#52adc8', textDecoration: 'underline' }}>📝 View PowerPoint (Written in Korean) 
          </a>
          <br/>
           <a 
        href="https://github.com/heeyeonkoo99/Capstone_Design2" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#52adc8', textDecoration: 'underline' }}
      >
       💻 View GitHub Repository
      </a>
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


export default Projects;