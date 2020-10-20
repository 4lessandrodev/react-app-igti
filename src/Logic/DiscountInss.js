export default (salario) => {
 let totalDiscount = 0;
 if (salario >= 6101.06) {
  return 713.10;
 
 }
 
 if (salario < 1045) {
  return ((salario * 7.5) / 100);
  
 }
 
 if (salario >= 1045) {
  totalDiscount = ((1045 * 7.5) / 100);
  salario -= 1045;
  
 }
 
 if (salario > 0) {
  if (salario >= 1044) {
   totalDiscount += ((1044 * 9) / 100);
   salario -= 1044;
  } else {
   return (totalDiscount += ((salario * 9) / 100));
  }
  
  if (salario > 0) {
   if (salario >= 1045) {
    totalDiscount += ((1045 * 12) / 100);
    salario -= 1045
   } else {
    return (totalDiscount += ((salario * 12) / 100));
   }
  }
  
  if (salario > 0) {
   if (salario <= 2967) {
    return (totalDiscount += ((salario * 14) / 100));
   } 
  }
 }
}