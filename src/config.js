const cache = {};

export const set = (data) => Object.assign(cache, data);
const get = (key) => (key ? cache[key] : cache);
export default get;
