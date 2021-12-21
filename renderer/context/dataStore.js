const store = {
  get data() {
    return (async () => window.api.getStore('data'))();
  },
  set data(data) {
    window.api.setStore('data', data);
  },
};

export default store;
