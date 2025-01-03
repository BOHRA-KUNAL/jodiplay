let handleChange = (key, value, allData, setAllData, errors) => {
  if (errors) errors[key] = "";
  allData[key] = value;
  setAllData({ ...allData });
};

export { handleChange };
