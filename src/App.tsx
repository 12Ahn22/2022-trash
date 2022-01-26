import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Doughnut from './components/chart.js/Doughnut';
import MainChart from './components/chart.js/MainChart';
import { getTakeAction } from './redux/_take';

function App() {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("==버튼 클릭==");
    dispatch(getTakeAction());
  }

  return (
    <div className="App">
      <h1>Main Page</h1>
      {/* <button onClick={onClickHandler}>액션 실행</button> */}

      {/* chart.js - 기본*/}
      {/* <MainChart /> */}

      {/* 도넛 차트 */}
      <div style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }}>
        <Doughnut />
        <Doughnut />
      </div>
    </div>
  );
}

export default App;
