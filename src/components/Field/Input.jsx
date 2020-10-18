import React from 'react';
import 'materialize-css';
import { TextInput } from 'react-materialize'

export default (props) => {
 return (<TextInput id={props.id} label={props.label} type={props.type} disabled={props.disabled} value={props.value}/>)
}

