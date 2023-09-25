const paginate = (followers) => {
  const itemsPerPage = 9;
  const numeberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: numeberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
