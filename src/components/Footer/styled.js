import styled from "styled-components";

export const ContainerLeft = styled.footer`
  display: flex;
  flex-direction: row;
  ${"" /* align-items: center; */}
  margin-top: 40px;
  margin-bottom: 20px;
  @media (max-width: 541px) {
    text-align: center;
    justify-content: center;
  }
`;
export const ContainerRight = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 541px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const TextFooter = styled.p`
  font-size: 13px;
  color: #333333;
  margin: 0 5px;
  @media (max-width: 769px) {
    font-size: 11px;
  }
`;
