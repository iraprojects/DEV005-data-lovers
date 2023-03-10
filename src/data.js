// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterData = (dataList, condition) => {
  const dataFilter = dataList.filter((item) => item.house === condition)
  return dataFilter;
}; 