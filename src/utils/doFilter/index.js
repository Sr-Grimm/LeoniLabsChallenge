const doFilter = (item, queryList) => {
  if (queryList) {
    var len = queryList.length,
    i = 0;
    for (; i < len; i++) {
      if (queryList[i].value === "default") break;
      if (typeof item[queryList[i].value] === "string" && !item[queryList[i].value].match(queryList[i].regex)) {
        return false;
      }
    }
  }
  return true
}

export default doFilter;