import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    justify-content: center;
    color: #7159c1;
    font-family: Mansalva;
  }

  div {
    width: 600px;
    height: 600px;
    /* border: 1px solid #ccc; */
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    max-width: 690px;
    
    input {
      height: 40px;
      margin: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 10px;
      font-size: 14px;
    }
    
    select {
      height: 40px;
      margin: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      background: #fff;
      padding: 10px;
      font-size: 14px;
    }
    
    span {
      font-family: Mansalva;
      color: #8B0000;
      font-size: 14px;
      margin-left: 10px;
      
    }
  }
  button {
    height: 50px;
    margin: 5px;
    margin-top: 20px;
    border-radius: 5px;
    background: #7159c1;
    padding: 10px;
    cursor: pointer;
    :hover {
      opacity: .8;
    }
  }
`;
