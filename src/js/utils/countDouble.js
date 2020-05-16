function countDouble(array) {
  const newObject = array.reduce((result, item) => {
    if (result[item.keyword] === undefined) {
      result[item.keyword] = 0;
    }
    // eslint-disable-next-line no-plusplus
    result[item.keyword]++;
    return result;
  }, {});
  return newObject;
}

export default countDouble;
