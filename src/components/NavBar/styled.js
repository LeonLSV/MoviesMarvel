import styled from "styled-components";

export const FondoFotoHeader = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const TextNavbar = styled.button`
  color: white;
  font-weight: 400;
  margin: 0 14px;
  font-size: 16px;
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 8px;
  }
`;

export const Logo = styled.img`
  width: 40%;
  @media (max-width: 991px) {
    width: 20%;
  }
  @media (max-width: 414px) {
    width: 40%;
  }
`;
