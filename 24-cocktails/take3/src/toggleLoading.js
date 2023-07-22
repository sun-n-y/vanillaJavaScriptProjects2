import get from './getElement.js';

const loading = get('.loading');

export function showLoading() {
  loading.classList.remove('hide-loading');
}

export function hideLoading() {
  loading.classList.add('hide-loading');
}
