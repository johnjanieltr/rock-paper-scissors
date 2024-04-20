// this function searches the same element and up to 3 elements above the defined dataset of an element

export const searchDataset = (el) => {
  const STEPS = {
    step1: el.dataset,
    step2: el.parentNode.dataset,
    step3: el.parentNode.parentNode.dataset,
    step4: el.parentNode.parentNode.parentNode.dataset,
  };

  let datasetObject = DOMStringMapToObject(STEPS.step1);
  if (!objectIsEmpty(datasetObject)) {
    return datasetObject;
  } else {
    datasetObject = DOMStringMapToObject(STEPS.step2);

    if (!objectIsEmpty(datasetObject)) {
      return datasetObject;
    } else {
      datasetObject = DOMStringMapToObject(STEPS.step3);

      if (!objectIsEmpty(datasetObject)) {
        return datasetObject;
      } else {
        datasetObject = DOMStringMapToObject(STEPS.step4);

        if (!objectIsEmpty(datasetObject)) {
          return datasetObject;
        } else {
          return console.error("Dataset not found");
        }
      }
    }
  }
};

// convert a DOMStringMap to object
const DOMStringMapToObject = (domStringMap) =>
  JSON.parse(JSON.stringify(domStringMap));

// validate if an object is empty
const objectIsEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true;
  return false;
};

export default searchDataset;
