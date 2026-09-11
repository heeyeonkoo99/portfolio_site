// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // <a> 대신 Link를 import 합니다.
import './Navbar.css';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      {/* <a> 태그가 아니라 <Link> 태그인지 확인! */}
      {/* href가 아니라 to 속성인지 확인! */}
      <Link to="/"  className="nav-link" style={styles.link}>Home</Link>
      <Link to="/education"  className="nav-link" style={styles.link}>Education</Link>
      <Link to="/experience"  className="nav-link" style={styles.link}>Experience</Link>
      <Link to="/projects"  className="nav-link" style={styles.link}>Projects</Link>
      <Link to="/skills"  className="nav-link" style={styles.link}>Skills</Link>
    </nav>
  );
};

const styles = {
 nav: {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ccc', // 그림자와 겹칠 수 있으니 이 부분은 삭제하거나 약하게 조절해도 좋습니다.
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // 그림자 추가
  zIndex: 100, // 다른 요소 위에 오도록 z-index 설정
},
  link: {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  padding: '5px 10px',
  transition: 'color 0.3s ease, background-color 0.3s ease', // 부드러운 전환 효과

  '&:hover': { // 마우스 오버 시 스타일 (JSS 또는 styled-components 사용 시)
    color: '#007bff', // 예시: 파란색으로 변경
    backgroundColor: '#f0f0f0', // 예시: 연한 회색 배경
    borderRadius: '4px',
  }
}}

export default Navbar;