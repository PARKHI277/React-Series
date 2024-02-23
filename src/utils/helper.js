export function filterData(searchInput, restaurtants) {
  const filterData = restaurtants.filter((restaurtant) =>
    restaurtant.info.name.includes(searchInput)
  );
  return filterData;
}
