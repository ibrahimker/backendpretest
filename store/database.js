let store;
class Database {
  constructor() {
    store = [];
  }
  storeMessage(message,source) {
    store.push({message:message,source:source});
  }
  
  getMessage() {
    return store;
  }
}

module.exports = Database;