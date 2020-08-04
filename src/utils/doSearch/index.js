const doSearch = (query, queryRetornator) => {
  if (!query.isAdvanced && query.value.value !== "default") {
    queryRetornator([{value: query.value.type, regex: new RegExp(query.value.value, "igm")}]);
    return;
  } else {
    if (Object.entries(query).length) {
      queryRetornator(Object.entries(query.value).filter((filterItem) => {
        return filterItem[1].length !== 0;
      }).map((mapItem) => {
          return ({value: mapItem[0], regex: new RegExp(mapItem[1], "igm")})
      }))
    };
  }
  
}

export default doSearch;