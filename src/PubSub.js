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

const PubSub = new PS();
export default PubSub;
