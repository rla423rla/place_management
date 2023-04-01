import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const history = useHistory();

  const handleButtonClick = (path) => {
    history.push(path);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('/page1')}>부지 설정</button>
      <button onClick={() => handleButtonClick('/page2')}>건물 설정</button>
      <button onClick={() => handleButtonClick('/page3')}>세부 장소 설정</button>
    </div>
  );
}

export default HomePage;
