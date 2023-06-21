//target elements
const tabBtns = document.querySelectorAll('.tab-btn');

//event listener
tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const tab = e.currentTarget.dataset.id;
    console.log(tab);
    tabBtns.forEach(function (item) {
      if (tab === item.dataset.id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
      console.log(item);
    });
  });
});
