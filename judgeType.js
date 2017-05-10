//判断数据的类型
function judgeType(data) {
  var typeStr = Object.prototype.toString.call(data);
  type = typeStr.split(' ')[1].split(']')[0];
  return type.toLowerCase();
}
console.log(judgeType({}));
console.log(judgeType([]));
console.log(judgeType(null));
console.log(judgeType(undefined));
console.log(judgeType(''));
console.log(judgeType(1));
console.log(judgeType(true));