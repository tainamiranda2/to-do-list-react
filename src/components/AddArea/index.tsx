import React from 'react';
import * as C from './styles';
import {useState} from 'react';

type Props={
  onEnter:(taskName: string)=>void
}

export const AddArea=({onEnter}: Props)=>{
  //pegando valor
  const [inputText, setIputText] =useState('');
//fazendo aparecer
  const handleKeyUp=(e: KeyboardEvent)=>{
    if(e.code==='Enter' && inputText !== ''){
    onEnter(inputText);
    setInputText('');
  }
}
return(
  <C.Container>

  <div className="image">+</div>

<input
type="text"
placeholder="Adicione uma tarefa"
value={inputText}
onChange={e=>setIputText(e.target.value)}
onKeyUp={handleKeyUp}
/>


  </C.Container>
)
}