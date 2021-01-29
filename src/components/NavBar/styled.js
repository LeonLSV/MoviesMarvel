import styled from "styled-components";

export const FondoFotoHeader = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const TextNavbar = styled.button`
  color: ${(props) => props.color};
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
  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
  width: 40%;
  @media (max-width: 769px) {
    width: 60%;
  }
`;

export const HideContainer = styled.div`
  display: ${(props) => props.display};
  width: 100%;
  @media (max-width: 991px) {
    display: ${(props) => props.display991};
  }
`;
