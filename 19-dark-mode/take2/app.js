//
const toggleBtn = document.querySelector('.btn');
const container = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

window.addEventListener('DOMContentLoaded', () => {
  const articlesData = articles
    .map(({ title, date, length, snippet }) => {
      return `<article class="post">
        <h2 class="post-title">${title}</h2>
        <div class="post-info">
          <span>${date}</span>
          <span>${length}</span>
        </div>
        <p>${snippet}</p>
      </article>`;
    })
    .join('');
  container.innerHTML = articlesData;
});
