module.exports = function check(str, bracketsConfig) {
  let array = str.split("");
  let openBracket = [];
  let closeBracket = [];
  let bool = false;
  let checkArray = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < array.length; i++) {
    if (openBracket.indexOf(array[i]) == -1 && closeBracket.indexOf(array[i]) == -1) {
      return false;
    }
    if (openBracket.indexOf(array[i]) != -1 && closeBracket.indexOf(array[i]) != -1) {

      if (openBracket.indexOf(array[i]) != -1 && checkArray.filter(item => item === array[i]).length % 2 === 0) {
        checkArray.push(array[i]);
        bool = false;
        continue;
      }
      if (closeBracket.indexOf(array[i]) != -1 && checkArray.filter(item => item === array[i]).length % 2 !== 0) {
        let checkValue = checkArray.pop();
        if (checkValue == undefined) {
          return false;
        }
        bool = bracketsConfig.filter((item) => {
          return item[1] === array[i]
        })[0][0] === checkValue;

      }
    }
    else {
      if (openBracket.indexOf(array[i]) != -1) {
        checkArray.push(array[i]);
        bool = false;
      }
      if (closeBracket.indexOf(array[i]) != -1) {
        let checkValue = checkArray.pop();
        if (checkValue == undefined) {
          return false;
        }
        bool = bracketsConfig.filter((item) => {
          return item[1] === array[i]
        })[0][0] === checkValue;

      }
    }

  }
  return bool;
}
