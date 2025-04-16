import styled from "styled-components";

const NavEstilizada = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  background-color: #000000;
`;

const ConteinerEsquerdaEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConteinerDireitoEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const CampoSearch = styled.div`
  display: flex;
  gap: .25rem;
  align-items: center;
 

  button{
    padding:1rem;
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #FFFFFF;
  }
`;

const InputEstilizado = styled.input`
  background: #ffffff;
  border: 1px solid #ced4da;
  color: #ced4da;
  width: 60%;
  padding: 1rem ;



  &::placeholder {
    color: #6c757d;
    
  }
`;

const CampoCart = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #daff01;
  }
`;

const ListaEstilizada = styled.ul`
  display: flex;
  gap: 1rem;
`;

const ImgEstilizada = styled.img``;



export {
  ImgEstilizada,
  InputEstilizado,
  NavEstilizada,
  ConteinerEsquerdaEstilizado,
  ListaEstilizada,
  ConteinerDireitoEstilizado,
  CampoCart,
  CampoSearch,
};
