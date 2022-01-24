import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getTakeAction } from './redux/_take';

function App() {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("==버튼 클릭==");
    dispatch(getTakeAction());
  }

  return (
    <div className="App">
      <button onClick={onClickHandler}>액션 실행</button>
    </div>
  );
}

export default App;
