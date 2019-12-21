import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-family: Mansalva;
    color: #35d1f5;
    font-size: 32px;
  }
  
`;

export const BoxCard = styled.div`
  
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  padding: 10px;
  color: #7159C1;
  font-family: Mansalva;
  span {
    font-weight: bold;
    margin-right: 5px;
    color: #000ccc;
  }

  header {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    font-family: Mansalva;
    margin: 20px;
  }
  main {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
  }
  footer {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  p {
    margin-bottom: 15px;
  }
`;
