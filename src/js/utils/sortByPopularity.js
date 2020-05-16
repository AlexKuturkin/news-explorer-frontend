import countDouble from "./countDouble";

function sortByPopularity(array) {
  const newObject = countDouble(array);
  const finalObject = Object.keys(newObject)
    .map((i) => ({
      keyword: i,
      count: newObject[i],
    }))
    .sort((a, b) => b.count - a.count);

  return finalObject;
}

export default sortByPopularity;
