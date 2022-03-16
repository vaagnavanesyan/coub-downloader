export const maxId = parseInt("zzzzzz", 36);

export const idGenerator = function* (nextId) {
  while (nextId <= maxId) {
    yield nextId.toString(36);
    nextId++;
  }
};