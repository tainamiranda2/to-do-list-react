import styled from 'styled-components';

type ContainerProps={
  done:boolean;
}

export const Container=styled.div(({done}:ContainerProps)=>(
  `
display: flex;
padding: 10px;
  background: #506693;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input{
    widh: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label{
    color: #FFF;
  text-decoration: ${done ? 'line-throug' : 'initial'};
  }
  `
));
