import React, { useEffect, useState } from 'react';
import PubSub from './PubSub';

function Child_C() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    PubSub.subscribe('DEMO_TOPIC', callMe);
  }, []);

  const callMe = (mes) => {
    setMessage(mes);
  };

  const unsubscribeFromTopic = () => {
    PubSub.unsubscribe('DEMO_TOPIC');
  };

  return (
    <div>
      Child C Component
      <div>Subscription {message}</div>
      <div>
        <button onClick={() => unsubscribeFromTopic()}>Unsubscribe</button>
      </div>
    </div>
  );
}

export default Child_C;
