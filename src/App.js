import React from 'react';
import Child_A from './Child_A';
import Child_B from './Child_B';
import Child_C from './Child_C';
import './style.css';

export default function App() {
  return (
    <div>
      <h4>I am parent Component App</h4>
      <p>I am rendering following components</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          align: 'center',
        }}
      >
        <Child_A />
        <Child_B />
        <Child_C />
      </div>
    </div>
  );
}
