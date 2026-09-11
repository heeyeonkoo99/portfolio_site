import React from 'react';
import PageContainer from '../components/PageContainer'; // PageContainer를 import 합니다.

// <p>훗날 2026 summer intern 추가?..?</p>
const Experience = () => {
  return (
    <PageContainer>
    <section id="experience" >
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.entry}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>LG AI Research</strong>, Seoul, Korea
    </h3>
    <p style={styles.date}>May. 2026 - Aug. 2026</p>
  </div>
  <p style={{ margin: '0 0 8px 0', color: '#444' }}>Research Scientist Intern | Data Intelligence Lab</p>
  <ul style={styles.details}>
    <li>Designed and implemented BindRAG, a graph-based RAG framework using programmatic query decomposition and explicit/implicit entity binding, outperforming leading baselines by +6.5 / +19.0 / +5.5 pp in string accuracy on 3 benchmarks, respectively; first-author manuscript in preparation for ICLR 2027.</li>
    <li>Reproduced and benchmarked 9 graph-based RAG methods across 3 multi-hop QA datasets using the DIGIMON evaluation framework, analyzing retrieval and reasoning failures to identify limitations in existing approaches and guide the development of BindRAG.</li>
    <li>Tuned LLM reasoning configurations in an internal RAG platform, reducing inference latency by ~40% with no degradation in answer accuracy; identified and categorized mislabeled samples through evaluation data analysis.</li>
  </ul>
</div>

<div style={styles.entry}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>ICL Lab, Yonsei University</strong>, Seoul, Korea
    </h3>
    <p style={styles.date}>Sep. 2023 - Aug. 2025</p>
  </div>
         <ul style={styles.details}>
            <li>Hyundai Project
              <ul style={styles.nestedList}>
                <li>Collaborated with a 4-member team and Hyundai Motor Company to architect an ontology-based information extraction framework by fine-tuning llama-based LLMs with a domain-specific automotive knowledge graph.</li>
                <li>Designed and implemented annotation guidelines for 422 automotive documents, constructing a knowledge graph with 7 entity classes and 22 relation types, achieving 93.7% coverage across 684 competency questions.</li>
                <li>Fine-tuned LLMs using the constructed KG and evaluated 5 event argument extraction baselines, achieving a +66% F1 score improvement over state-of-the-art models.</li>
                <li>Developed a retrieval-augmented generation (RAG)-based complex claim fact-checking framework leveraging advanced prompt engineering using GPT-3.5-turbo, outperforming NLI fine-tuned baselines by +7.92% F1, contributing to a research publication (under ESWA journal review) and an ongoing patent filing.</li>
                 <li>Preprocessed and annotated 500 automotive recall records from the NHTSA dataset on Kaggle for NER and relation tagging, evaluating precision, recall, and F1 across diverse manufacturing document sets.</li>
                 <li>
          Paper: 
          <a 
            href="https://www.sciencedirect.com/science/article/pii/S1474034624006529"
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#52adc8', textDecoration: 'underline', marginLeft: '4px' }}
          >


             OmEGa(𝛺):Ontology-basedinformationextractionframeworkfor
 constructing task-centric knowledge graph frommanufacturingdocuments
 withlarge languagemodel
          </a>
        </li>
              </ul>
            </li>
            <br/>
            <li>
              Graduate Research Assistant
              <ul style={styles.nestedList}>
                <li>Supervisor: Prof. Kyong-Ho Lee</li>
                <li>Conducted research in fact-checking, developing an LLM-based framework and contributing to a research 
publication.</li>
                <li>Thesis: <a 
        href="https://dcollection.yonsei.ac.kr/srch/srchDetail/000000560462" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#52adc8', textDecoration: 'underline' }}
      >
        Complex Fact Checking through Linking Implicit and Explicit Claims with Large Language Model Reasoning
      </a></li></ul>
            </li>
          </ul>
          </div>

<div style={styles.entry}>
  {/* 한 줄에 학교 정보와 날짜 배치 */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>Seoul National University</strong>, Seoul, Korea
    </h3>
    <p style={styles.date}>Jan. 2023 - Apr. 2023</p>
  </div>

  {/* 상세 내용 */}
  <ul style={styles.details}>
    <li>
      Assisted in drafting methodology and results sections for a representation learning paper using LaTeX.
      <li>Organized and synthesized research notes, reviewed recommended publications, and engaged in discussions with the PI to deepen understanding of representation learning.</li>
      <ul style={styles.nestedList}>
        <li>
          Paper: 
          <a 
            href="https://arxiv.org/abs/2402.08963" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#52adc8', textDecoration: 'underline', marginLeft: '4px' }}
          >
            DUEL: Duplicate Elimination on Active Memory for Self-Supervised Class-Imbalanced Learning
          </a>
        </li>
      </ul>
    </li>
  </ul>





      
          </div>


{/* ETRI */}
<div style={styles.entry}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>ETRI</strong>, Daejeon, Korea
    </h3>
    <p style={styles.date}>Jul. 2022 - Aug. 2022</p>
  </div>

  <ul style={styles.details}>
    <li>Analyzed hologram compression algorithms (interference codecs) and evaluated their performance.</li>
    <li>Applied internship knowledge to a capstone project on phase unwrapping, comparing RMSE performance of Res-UNet, PUMA, and DCT methods for hologram phase compression.</li>
  </ul>
</div>

{/* Myzzym */}
<div style={styles.entry}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={styles.degree}>
      <strong>Myzzym</strong>, Gyeonggi-do, Korea
    </h3>
    <p style={styles.date}>Dec. 2020 - Feb. 2021</p>
  </div>

  <ul style={styles.details}>
    <li>Built a responsive storage platform using React.js, enhancing user experience across multiple devices.</li>
    <li>Created and executed 128 test scenarios for user and admin modes, ensuring cross-browser functionality on IE, Chrome, Microsoft Edge, and Safari.</li>
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


export default Experience;