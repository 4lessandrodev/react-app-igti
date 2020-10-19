import CalcDiscountInss from './DiscountInss';
import CalcDiscountIrpf from './DiscountIrpf';
import GenerateStatistics from './Statistics';

export default (props) => {
 const { salario } = props;
 const salarioNumber = parseFloat(salario);

 const discontoInss = CalcDiscountInss(salarioNumber);
 const discontoIrpf = CalcDiscountIrpf((salarioNumber - discontoInss));
 const result = GenerateStatistics({ discontoInss, discontoIrpf, salarioNumber });
 return result;
}