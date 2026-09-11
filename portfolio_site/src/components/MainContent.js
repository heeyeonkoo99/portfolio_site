// src/components/MainContent.jsx
import React from 'react';
import PageContainer from './PageContainer'; // PageContainer를 import 합니다.
const FlipCard = ({ imgSrc, description }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div style={styles.card} onClick={() => setFlipped(!flipped)}>
      <div
        style={{
          ...styles.inner,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div style={styles.front}>
          <img src={imgSrc} style={styles.image} alt="like" />
        </div>

        {/* BACK */}
        <div style={styles.back}>
          <p style={styles.text}>{description}</p>
        </div>
      </div>
    </div>
  );
};




const MainContent = () => {
  return (
    <PageContainer>
      <h2 style={styles.heading}>About Me</h2>
      <p>Hello! I'm Heeyeon Koo.</p>

<p>
My area of expertise lies in natural language processing, with a particular focus on large language models (LLMs) and retrieval-augmented generation (RAG). 
I am passionate about building user-centered AI services that can bring real value to people’s daily lives.
</p>

<p>
I have strong experience in Python and have been actively engaged in projects and research related to fact-checking, multi-agent reasoning, and structured knowledge representation. 
These experiences have helped me strengthen both my technical skills and my ability to design practical AI solutions.
</p>

<p>
I aspire to further expand my expertise in NLP and AI engineering, and I am always eager to learn new approaches and apply them to real-world problems. 
If you are interested in collaborating with me, please feel free to reach out.
</p>
<h2 style={styles.heading}>What I Like</h2>

<div style={styles.likeContainer}>
  <div style={styles.item}>
    <img
      src={process.env.PUBLIC_URL + '/dog.jpg'}
      alt="dog"
      style={styles.likeImage}
    />
    <p style={styles.caption}>I’m a total dog person! This photo is of me giving a dog a high five.</p>
  </div>

  <div style={styles.item}>
    <img
      src={process.env.PUBLIC_URL + '/bread.jpg'}
      alt="bread"
      style={styles.likeImage}
    />
    <p style={styles.caption}>I love cooking! These are the lemon madeleines my friend and I made together!</p>
  </div>

  <div style={styles.item}>
    <img
      src={process.env.PUBLIC_URL + '/nature.jpg'}
      alt="nature"
      style={styles.likeImage}
    />
    <p style={styles.caption}>Nature helps me relax and inspires me! This is a photo from Andrew Brown Park East in Texas.</p>
  </div>
</div>

    </PageContainer>
  );
};

// --- STYLES ---
// Add this styles object to control the look and feel
const styles = {
 

likeContainer: {
  display: "flex",
  gap: "50px",
  marginTop: "20px",
},

item: {
  width: "300px",
  textAlign: "center",
},

likeImage: {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "10px",
},

caption: {
  marginTop: "10px",
  fontSize: "0.95em",
  color: "#444",
},


  text: {
    fontSize: "1em",
    color: "#333",
    lineHeight: "1.4",
  },
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
  imageGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(3, 1fr)',
gap: '20px',
marginTop: '20px',
},
image: {
width: '100%',
height: '200px',
objectFit: 'cover',
borderRadius: '12px',
boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
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

export default MainContent;
