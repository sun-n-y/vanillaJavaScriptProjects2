const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Error in selection of target element`);
  }
};

export default getElement;
