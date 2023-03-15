// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterData = (dataList, condition) => {
  const dataFilter = dataList.filter((item) => item.house === condition)
  console.log(dataFilter)
  return dataFilter;
};

export const filterProtagonists = (datalist, protagonists) => {
  const dataFilter = datalist.filter((item) => protagonists.includes(item.name));
  return dataFilter;
}