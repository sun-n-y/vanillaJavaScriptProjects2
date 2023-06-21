//target elements
const tabBtns = document.querySelectorAll('.tab-btn');
const contentText = document.querySelectorAll('.content');

//event listener
tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const tab = e.currentTarget.dataset.id;
    tabBtns.forEach(function (item) {
      if (tab === item.dataset.id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    contentText.forEach(function (tabContent) {
      const attr = tabContent.getAttribute('id');
      if (tab === attr) {
        tabContent.classList.add('active');
      } else {
        tabContent.classList.remove('active');
      }
    });
  });
});
