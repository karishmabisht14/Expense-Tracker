export const formatObjectToArray = (arrayObject = []) => {
  let newArray = [];
  for (const key in arrayObject) {
    if (arrayObject.hasOwnProperty(key)) {
      newArray.push({
        _id: key,
        ...arrayObject[key],
      });
    }
  }
  return newArray;
};
