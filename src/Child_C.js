import React, { useEffect, useState } from 'react';
import PubSub from './PubSub';

function Child_C() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    PubSub.subscribe(callMe);
  }, []);

  const callMe = (mes) => {
    setMessage(mes);
  };

  return <div>Child C Component: {message}</div>;
}

export default Child_C;
