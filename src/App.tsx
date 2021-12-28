import React from 'react'
import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item'
import './App.css';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

 const App=()=> {
//criando um array com valores
const [list, setList] = useState<Item[]>([

{id: 1,name: 'Estudar react', done: false
 }
  ]);

const handleAddTask=(taskName: string)=>{
  let newList =[...list];
  //adicionado  
  newList.push({
    id:list.length +1,
    name:taskName,
    done:false
  });
//atualizando
  setList(newList);
}
  return (
    
    <C.Container>
    <C.Area>
    
    <C.Header>Lista de tarefas</C.Header>
    
   <AddArea onEnter={handleAddTask}/>

   {list.map((item, index)=>(
   <ListItem key={index} item={item}/>
   ))}

    </C.Area >
    </C.Container>
    
  )
}
export  default App;