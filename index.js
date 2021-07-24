
// function superbowlWin(array) {
//   let answer = array.find(o => o.result === 'W')
//   if (year == null) {
//   return undefined }
//   else {
//     return answer['year'] 
//   }
//   }


// function superbowlWin(records) {
//   let season = records.find(record => record.result === 'W')
//   return season ? season.year : undefined
//   }

//   function isWin(season) {
//     return array.result === 'W'
//   }

  const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 
function isWin(season) {
  return season.result === "W"
}


function superbowlWin(arrays) {
  let answer = arrays.find(isWin)
  if (answer == null ) {
    return undefined
  } else 
  {return answer.year}
}

console.log(superbowlWin(record))

// function superbowlWin(arrays) {
//   let answer = null;
//   if (arrays.find(isWin)) {
//     return arrays.find(isWin).year
//   } else return answer
// }


// function superbowlWin(arrays) {
//   let year = arrays.find(season => season.result === 'W')
//   if (year == null) {
//   return undefined }
//   else {
//     return year['year'] 
//   }
//   }

// function superbowlWin(arrays) {
//   let answer = null;
//   let win = arrays.find(isWin)
//   if (win) { return win.year }
//  else return answer
// }


// console.log(superbowlWin(record))