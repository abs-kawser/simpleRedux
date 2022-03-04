/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './action/index';


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  console.log(myState);
  return (
    <>
      <div className="container">

        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
          <input name="quantity" type="number" className="quantity__input" value={myState} />
          <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
        </div>

      </div>

    </>
  );
};


export default App;