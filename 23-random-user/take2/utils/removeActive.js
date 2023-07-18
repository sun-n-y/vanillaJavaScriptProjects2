export default function removeAcitve(items) {
  items.forEach((btn) => {
    btn.classList.remove('active');
  });
}
