import React from 'react';
import PubSub from './PubSub.js';

function GrandChild_A() {
  const clickMe = () => {
    PubSub.publish('DEMO_TOPIC', Math.floor(Math.random() * 500));
  };

  return (
    <div>
      Grand Child A Component
      <div>
        <button onClick={() => clickMe()}>Click Me </button>
      </div>
    </div>
  );
}

export default GrandChild_A;
