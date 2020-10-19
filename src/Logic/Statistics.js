export default (props) => {
 const { discontoInss, discontoIrpf, salarioNumber } = props;

 return {
  baseInss:salarioNumber,
  descontoInss:discontoInss,
  porcentagemInss:String(parseFloat((salarioNumber / discontoInss)).toFixed(2)),
  baseIrpf:(salarioNumber - discontoInss),
  descontoIrpf: discontoIrpf,
  porcentagemIrpf: String(parseFloat((salarioNumber - discontoInss) / discontoIrpf).toFixed(2)),
  salarioLiquido:(salarioNumber - discontoIrpf - discontoInss)
 }

}
