import styled from 'styled-components';

export const Titulo = styled.h1`
  font-family: Mansalva;
  color: #35d1f5;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: Mansalva;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px;
`;

export const BoxCard = styled.div`
  
  header {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Mansalva';
    width: 100%;
    
  }
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100px;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  padding: 10px;
  color: #7159C1;
  :hover {
    background: #7159C1;
    color: #fff;
  }
`;

export const BoxIcons = styled.div`
  display: flex;
  svg {
    margin-left: 15px;
    cursor: pointer;
  }
`;

export const BoxSection = styled.section`
  display: flex;
  align-items: flex-end;
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  a {
    font-family: 'Roboto';
    color: #35d1f5;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }
  }
`;

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #007f00;
  z-index: 8;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
  transition: .2s ease-out;
  position: fixed;
  bottom: 50px;
  right: 50px;
  :hover {
    opacity: .8;
  }
`;

