function filterData(SearchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(SearchInput.toLowerCase())
  );

  return filterData;
}

export default filterData;
