//target elements
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//event listeners
sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
