// src/components/PageContainer.js

import React from 'react';

// MainContent에 있던 스타일 코드를 그대로 가져옵니다.
const styles = {
 container: {
  flex: 1,
  padding: '20px',
  backgroundColor: '#ffffffff', // 배경색을 흰색으로 통일하는 것이 깔끔합니다. (fef2ec는 너무 연한 베이지색)
  borderRadius: '12px',
  marginLeft: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)', // 그림자 추가
},
};

// PageContainer 컴포넌트는 자식 요소(children)를 받아서
// 정해진 스타일의 div로 감싸주는 역할을 합니다.
const PageContainer = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

export default PageContainer;