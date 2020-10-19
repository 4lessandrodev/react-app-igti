export default (salario) => {
 if (salario <= 1045) {
  return ((salario * 7.5) / 100);

 } else if (salario <= 2089.60) {
  return ((salario * 9) / 100);

 }else if (salario <= 3134.40) {
  return ((salario * 12) / 100);

 }else if (salario <= 6101.06) {
  return ((salario * 14) / 100);

 } else if (salario > 6101.06) {
  return 713.10
  
 } else {
  return ''

 }
}