export async function getStore(cb, initialValue) {
  const res = (await window.api.getStore('data')) || initialValue;
  cb(res);
}

export async function setStore(data) {
  window.api.setStore('data', data);
}
