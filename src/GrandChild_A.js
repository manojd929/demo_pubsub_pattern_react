import React from 'react';
import PubSub from './PubSub.js';

function GrandChild_A() {
  const clickMe = () => {
    PubSub.publish('Value : ' + `${Math.floor(Math.random() * 500)}`);
  };

  return (
    <div>
      Grand Child A Component
      <button onClick={() => clickMe()}>Click Me </button>
    </div>
  );
}

export default GrandChild_A;
