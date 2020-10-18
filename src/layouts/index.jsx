import React from "react";
import Title from '../components/Title'
import InputField from '../components/Field/Input'
import Graph from '../components/Graph/index'

export default () => {
 return (
  <>
  <main className="container">
   <header>
     <Title title="React Salário" />
    </header>
    <section>
     <InputField id="input-salario" type="number" label="Salario Bruto" value={''}/>
     <InputField id="base-inss" type="text" label="Base INSS" disabled={true} value={''}/>
     <InputField id="input-salario" type="text" label="Desconto INSS" disabled={true} value={''}/>
     <InputField id="input-salario" type="text" label="Base IRPF" disabled={true} value={''}/>
     <InputField id="input-salario" type="text" label="Desconto IRPF" disabled={true} value={''}/>
     <InputField id="input-salario" type="text" label="Salario Líquido" disabled={true} value={''} />
     <Graph></Graph>
     </section>
    </main>
  </>
  )
 }