class PS {
  constructor() {
    this.listeners = {};
  }

  publish(topic, payload) {
    if (!this.listeners[topic]) {
      return;
    }

    this.listeners[topic].forEach((listener) => {
      listener(payload);
    });
  }

  subscribe(topic, listener) {
    if (!topic || !listener || typeof listener !== 'function') {
      return;
    }
    this.listeners[topic] = this.listeners[topic] || [];
    this.listeners[topic].push(listener);
  }

  unsubscribe(topic) {
    delete this.listeners[topic];
  }
}

let PubSub = null;

const getPubSub = () => {
  if (!PubSub) {
    PubSub = new PS();
    return PubSub;
  }
  return PubSub;
};

export default getPubSub();
