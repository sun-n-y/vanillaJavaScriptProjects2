const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
