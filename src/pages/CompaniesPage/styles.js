import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: "column";
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  align-self: center;
  padding: 1rem;
  margin: 1rem;
  position: relative;
  max-height: 500px;
`;

export const CustomLogo = styled.img`
  width: 200px;
  align-self: center;
`;

export const RoutesLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  
  a {
    border: 1px solid lightblue;
    border-radius: 4px;
    padding: 6px 10px;
    text-decoration: none;
    color: #000;
  }
`