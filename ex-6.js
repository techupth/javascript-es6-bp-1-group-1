let height = undefined;
let result;

function nullish(para) {
  result = para || "Height is not defined";
  return result;
}

console.log(nullish(result)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
