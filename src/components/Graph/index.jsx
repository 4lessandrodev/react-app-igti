import React from 'react';
import './style.css'

export default (props) => {
 return (
  <div className='main'>
   <div className="desconto-inss item" style={{width:`${props.descontoInss}%`}}></div>
   <div className="desconto-irpf item" style={{ width: `${props.porcentagemIrpf }%`}}></div>
   <div className="salario-liquido item" style={{ width: `${props.salarioLiquido}%` }}></div>
  </div>
 )
}