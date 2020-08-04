/**
 * @name getAge
 * @param {String} born 
 * @returns {String}
 * @author Agustin Fredes
 * @description it takes born date with API format and get the age.
 */
const getAge = (born) => {
  const [bornYear, bornMonth, bornDay] = born.split("-").map((i) => {
    return parseInt(i)
  })
  const bornDate = new Date(bornYear, bornMonth, bornDay)
  const date = new Date();
  var diff = date.getTime() - bornDate.getTime();
  return (JSON.stringify(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))))
};

export default getAge;