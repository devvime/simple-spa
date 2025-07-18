class Storage {
  set(name, data) {
    if (typeof data === "object") {
      localStorage.setItem(name, JSON.stringify(data));
    } else if (typeof data === "string") {
      localStorage.setItem(name, data);
    }
  }

  get(name) {
    const data = localStorage.getItem(name);
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }
}

export default new Storage();
