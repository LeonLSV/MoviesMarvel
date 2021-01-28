import styled from "styled-components";

export const TextoDescription = styled.p`
  color: #333333;
  font-size: 15px;
`;

export const TextTitle = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: 0;
  margin-top: ${(props) => props.margintop};
`;
