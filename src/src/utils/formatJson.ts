export function removeQuotesFromKeysInArray(jsonArray) {
  const cleanedArray = jsonArray.map((obj) => {
    const cleanedObject = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const cleanedKey = key.replace(/"/g, '');
        cleanedObject[cleanedKey] = obj[key];
      }
    }

    return cleanedObject;
  });

  return cleanedArray;
}