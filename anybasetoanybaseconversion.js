// function checkValidOrNot(number, baseValue) {
//   for (let i = 0; i < number.length; i++) {
//     const char = number[i];
//     if (char >= 48 && char <= 57) {
//       return true;
//     } else if (char >= 65 && char <= 90) {
//       return true;
//     } else {
//       return false;
//     } 
//   }
// }
// function pow(a, b) {
//   let num = 1;
//   for (let i = 0; i < b; i++) {
//     num =num*a;
//   }
//   return num;
// }
// function anyBaseToDecimal(s, baseNumber) {
//   let sum = 0;
//   var num =toString(s)
//   n = num.length;
//   for (let i = n; i > 0; i--) {
//     const ch = num[i - 1];
//     if (ch >= 48 && ch <= 57) {
//       sum += (ch - 48) * pow(baseNumber, n - i);
//     } else if (ch >= 65 && ch <= 90) {
//       sum += (ch - 55) * pow(baseNumber, n - i);
//     }
//   }
//   return sum;
// }

// function decimalToAnyBase(number, baseNumber1) {
//   let num = "";
//   while (number > 0) {
//     const rem = number % baseNumber1;
//     const rem1 = String(rem);
//     if (rem1 >= "0" && rem1 <= "9") {
//       num = rem1 + num;
//     } else {
//       num = String.fromCharCode(rem + 55) + num;
//     }
//     number /= baseNumber1;
//   }
//   return num;
// }
function checkValidOrNot(number, basevalue) {
  let flag = false;
  for (let i = 0; i < number.length; i++) {
      let ch = number[i];
      if(ch.charCodeAt()>=48 && ch.charCodeAt()<=57){
        if (ch.charCodeAt() - 48 < basevalue) flag = true;
        else {
          return false;
      }
      }
      else{
        if (ch.charCodeAt() - 55 < basevalue) flag = true;
        else {
          return false;
      }
      }
      
  }
  return flag;
}

function pow(a, b) {
  let num = 1;
  for (let i = 0; i < b; i++) {
      num *= a;
  }
  return num;
}

function anyBaseToDecimal(s, basenumber) {
  if(basenumber===10) return s;
  let sum = 0;
  let n = s.length;
  for (let i = n; i > 0; i--) {
      let ch = s[i - 1];
      if (ch >= '0' && ch <= '9') {
          let a = parseInt(ch);
          sum += a * pow(basenumber, n - i);
      } else if (ch >= 'A' && ch <= 'Z') {
          let a = ch.charCodeAt() - 55;
          sum += a * pow(basenumber, n - i);
      }
  }
  return sum;
}

function decimalToAnyBase(number, basenumber1) {
  let num = "";
  while (number > 0) {
      let rem = number % basenumber1;
      let rem1 = rem;
      if (rem1 >= 0 && rem1 <= 9) {
          rem1 = rem + 48;
          num = String.fromCharCode(rem1) + num;
      } else if (rem >= 10) {
          rem1 = rem + 55;
          num = String.fromCharCode(rem1) + num;
      }
      number = Math.floor(number / basenumber1);
  }
  return num;
}
// var number=10;
// var base1=2;
// var base2=10;
//   var decimal=anyBaseToDecimal(number,base1);
//   console.log(decimal);
//   var num=decimalToAnyBase(decimal,base2);

let btn=document.getElementById("btn");
let x=document.getElementById("x")
btn.addEventListener("click",() => {
  let number=document.getElementById("number").value;
  let base1=document.getElementById("base1").value;
  let base2=document.getElementById("base2").value;
  let check=checkValidOrNot(number,base1);
  if(check===true){
    let decimal=anyBaseToDecimal(number,base1);
    let num=decimalToAnyBase(decimal,base2);
    x.innerHTML=num;
  }
  else{
    confirm("INVALID INPUT ! ");
  }
  
});

// const check = checkValidOrNot(number, baseOfNum);
// if (check) {
//   // const decimal = anyBaseToDecimal(number, baseOfNum);
//   // const convertedNumber = decimalToAnyBase(decimal, baseOfNum1);
//   // console.log(convertedNumber);
//   output.document.write(num);
// } else {
  //   outputdocument.write("Invalid number");

// Check if all characters in the number are valid digits for the given base.
// console.log((decimalToAnyBase(anyBaseToDecimal(num.value,b1.value).value,b2.value)));
// The character is a digit in the decimal base (0-9).
// The character is a digit in the hexadecimal base (A-F).
// The character is not a valid digit.
// Calculate a raised to the power of b.
// Convert a number from decimal to any base.
// Driver code.

// const baseOfNum = 10;
// const number = "M1";
// const baseOfNum1 = 10;

// Check if the number is valid.

// If the number is valid, convert it to decimal and then to the desired base.

// Convert a number from any base to decimal.
// The character is a digit in the decimal base (0-9).
// The character is a digit in the hexadecimal base (A-F).

