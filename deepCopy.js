const deepCopy = function(object) {
  if(typeof object === 'object') {
    const copy = {...object};
    for (const key in copy) copy[key] = deepCopy(copy[key]);
    return copy;
  }

  return object;
}