import React from 'react';
import PageContainer from '../components/PageContainer'; // PageContainer를 import 합니다.


const Skills = () => {
  return (
    <PageContainer>
    <section id="skills">
      <h2 style={styles.heading}>Skills</h2>
      <p>Languages: Python, Javascript, C++, Java, MATLAB, SQL</p>
      <p>Libraries: PyTorch, scikit-learn, Spacy, HuggingFace, Transformer, Pandas, Numpy</p>
      <p>Software: Visual Studio Code, Visual Studio, Jupyter Notebook, Android Studio, Claude Code, Cursor</p>
     
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

export default Skills;