const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output")
const arro1 = [
  ["I", 1],
  ["X", 10],
  ["C", 100], 
  ["M", 1000],
  ["X̅", 10000],
  ["C̅", 100000],
  ["M̅", 1000000]
]
const arro2 = [
   ["V", 5],
   ["L", 50],
   ["D", 500], 
   ["V̅", 5000],
   ["L̅", 50000],
   ["D̅", 500000]
]
const convert = () => {
  let arr = input.value.split("");
  let val = parseFloat(input.value);
  let numData = [];
  let final = [];
    if (/e/i.test(input.value) || !input.value){
      output.innerText = "Please enter a valid number";
      return
    } else if (val < 0){
      output.innerText = "Please enter a number greater than or equal to 1";
      return
    } else if (val > 3999999) {
      output.innerText = "Please enter a number less than or equal to 3,999,999";
      return;
    } else {
      
      numData.push(input.value.split("").map((num)=>parseFloat(num)));
      let home = [];
      for(let i = numData[0].length; i > 0; i--){
        home.push(i); 
      }
      numData.push(home)
      for(let i = 0; i < numData[0].length; i++){
        if (numData[0][i] <= 3){
          for(let j = 0; j < numData[0][i];j++){
            let numm=numData[1][i]
            final.push(arro1[numm - 1][0])
          }
        } else if (numData[0][i] == 4) {
          let numm=numData[1][i]
          final.push(arro1[numm - 1][0] + arro2[numm-1][0])
        } else if (numData[0][i] == 5) {
          let numm=numData[1][i]
          final.push(arro2[numm-1][0])
        } else if (numData[0][i] > 5 && numData[0][i] < 9) {
          let numm=numData[1][i]
          final.push(arro2[numm-1][0])
          for(let l = 0; l < (numData[0][i]) - 5;l++){
            final.push(arro1[numm - 1][0])
          }
        } else if(numData[0][i] == 9) {
          let numm=numData[1][i];
          final.push(arro1[numm-1][0] + arro1[numm][0])
        }
      }
    }
  output.innerText = final.join('')
}
btn.addEventListener('click',convert)

input.addEventListener('keydown',(e) => {
if (e.key == "Enter"){
  convert()
}
})  
console.log([ [ 2, 5, 8 ], [ 3, 2, 1 ] ])