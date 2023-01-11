// let x = [1,2,3,4,5,6,7,8]
// console.log(x)

// let y = Array.from(x)
// console.log(y)

// function myVar(a){
//     return a*a
// }
// console.log(myVar(45))

// let myKey = (a)=>(a*a)
// console.log(myKey(5))
// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// const searchArray = (arr, value) => {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
// };

// console.log(searchArray(items, 1));







// var items = [1,2,3,4,5,6,7,8,9]

// const findPosition = (array,value)=>{
//     let n = array.length
//     for(let i=0;i<n;i++)
//     if(array[i]===value)
//     return i;
// }
// console.log(findPosition(items,7))

// var items = [200,300,456,789,543,764,985,9467,898936]

// const findPosition = (array,value)=>{
//     let n = array.length
//     for(let i=0;i<n;i++)
//     if(array[i]===value)
//     return i ;
// }
// console.log(findPosition(items,789));

// var items = [
//     [1,2,3,4,5],
//     ['hello world'],
//     [34,56,78,90]
// ];
// const print = (array)=>{
//     let n = array.length
//     for(let i=0;i<n;i++){
//         console.log('row'+ i)
//         for(let j=0;j<n;j++)
//         console.log(array[i][j])
//     }
// }
// print(items)
// var year = [2012,2013,2014,2015,2016,2017,2018,2019,2020]
// const leapYear = (array)=>{
//     array.map((year)=>{
//         if(year%4===0){
            
//         }
//     })
// }


const checkLeapYear = (current_year) => {
    let numOfLeapYears = 0;
    for (let i = current_year; i <= 2100; i++) {
      if (i % 4 === 0) {
        console.log("The year " + i + "  is a leap year");
        numOfLeapYears += 1;
      } else {
         console.log('The year ' + i + '  is NOT a leap year')
      }
    }
    console.log(
      "There are " +
        numOfLeapYears +
        " Leap Years  Between " +
        current_year +
        " adn the year 2100"
    );
  };
  
  console.log(checkLeapYear(2022));
  