class PS {
  constructor() {
    this.listeners = [];
  }

  publish(msg) {
    this.listeners.forEach((ls) => {
      ls(msg);
    });
  }

  subscribe(ls) {
    if (typeof ls === 'function') {
      this.listeners.push(ls);
    }
  }
}

const PubSub = new PS();
export default PubSub;
