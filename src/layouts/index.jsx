import React, {Component} from "react";
import Title from '../components/Title'
import InputField from '../components/Field/Input'
import Graph from '../components/Graph/index'
import Calc from '../Logic/Calc';


export default class Layout extends Component {

  constructor() {
    super()

    this.state = {
      salario:'',
      baseInss: '',
      descontoInss: '',
      porcentagemInss: '',
      baseIrpf: '',
      descontoIrpf: '',
      porcentagemIrpf: '',
      salarioLiquido:''
    }
  }

  calculate = (event) => {
    const salario = event.target.value;
    const result = Calc({ salario });
    console.table(result)
    this.setState({
      salario:event.target.value,
      baseInss: result.baseInss | '',
      descontoInss: result.descontoInss | '',
      porcentagemInss: result.porcentagemInss | '',
      baseIrpf: result.baseIrpf | '',
      descontoIrpf: result.descontoIrpf | '',
      porcentagemIrpf: result.porcentagemIrpf | '',
      salarioLiquido:result.salarioLiquido | ''
    })
 } 
  
  formatNumber =(number)=> new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(number);
  formatPercent = (number) => new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);

  render() {

    const { salario=0, baseInss=0, descontoInss=0, porcentagemInss=0, baseIrpf=0, descontoIrpf=0, porcentagemIrpf=0, salarioLiquido=0 } = this.state;

    return (<>
      <main className="container">
        <header>
          <Title title="React Salário" />
        </header>
        <section>
          <InputField
            id="input-salario" type="number" label="Salario Bruto"
            value={salario} onChange={this.calculate} className="input-salario"/>
          <InputField
            id="base-inss" type="text" label="Base INSS"
            disabled={true} value={String(this.formatNumber(baseInss))} readOnly={true}  className="base-inss"/>
          <InputField
            id="desconto-inss" type="text" label="Desconto INSS"
            disabled={true} value={String(`${this.formatNumber(descontoInss)} - ${this.formatPercent(porcentagemInss)}%`)} readOnly={true}  className="desconto-inss"/>
          <InputField
            id="base-irpf" type="text" label="Base IRPF"
            disabled={true} value={String(this.formatNumber(baseIrpf))} readOnly={true}  className="base-irpf"/>
          <InputField
            id="desconto-irpf" type="text" label="Desconto IRPF"
            disabled={true} value={String(`${this.formatNumber(descontoIrpf)} - ${this.formatPercent(porcentagemIrpf)}%`)} readOnly={true}  className="desconto-irpf"/>
          <InputField
            id="salario-liquido" type="text" label="Salario Líquido"
            disabled={true} value={`${String(this.formatNumber(salarioLiquido))} - ${this.formatPercent(100 - parseFloat(porcentagemIrpf) - parseFloat(porcentagemInss))}%`} readOnly={true}  className="salario-liquido"/>
          <Graph
            porcentagemIrpf={porcentagemIrpf}
            salarioLiquido={100 - parseFloat(porcentagemIrpf) - parseFloat(porcentagemInss)}
            descontoInss={porcentagemInss}
          ></Graph>
        </section>
      </main>
    </>)
  }
 }