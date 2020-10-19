export default (salario) => {
 if (salario <= 1903.98) {
  return 0;

 } else if (salario <= 2826.65) {
  return (((salario * 7.5) / 100) - 142.80);

 }else if (salario <= 3751.05) {
  return (((salario * 15) / 100) - 354.80);

 }else if (salario <= 4664.68) {
  return (((salario * 22.5) / 100) - 636.13);

 } else {
  return (((salario * 27.5) / 100) - 869.36);

 }
}