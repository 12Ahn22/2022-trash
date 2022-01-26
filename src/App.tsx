import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
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

      {/* chart.js */}
      <MainChart />
    </div>
  );
}

export default App;
