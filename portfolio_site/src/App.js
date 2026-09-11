// src/App.js

import React from 'react';
// 1. HashRouter, Routes, Route를 모두 import 했는지 확인
import { HashRouter, Routes, Route } from 'react-router-dom';

// 2. Navbar와 모든 페이지 컴포넌트를 import 했는지 확인
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'; // Home 화면 (About Me)
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    // 3. HashRouter가 앱의 최상단을 감싸고 있는지 확인
    <HashRouter>
      <div>
        <Navbar /> {/* Navbar도 HashRouter 안에 있어야 합니다 */}
        <div style={styles.body}>
          <Sidebar />
          {/* 4. Routes와 Route 설정이 올바른지 확인 */}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

const styles = {
  body: {
    display: 'flex',
    padding: '40px',
    backgroundColor: '#f9f6deff',
    minHeight: '100vh',
  },
};

export default App;