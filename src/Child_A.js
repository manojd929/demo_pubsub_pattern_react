import React from 'react';
import GrandChild_A from './GrandChild_A';

function Child_A() {
  return (
    <div>
      Child A Component
      <GrandChild_A />
    </div>
  );
}

export default Child_A;
