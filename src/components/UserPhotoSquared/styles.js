import styled from 'styled-components';

export const ImageArea = styled.div`
  width: ${(props) => props.size ? props.size : '100px'};
  height: ${props => props.height ? props.height : '100px'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Image = styled.span`
  width: 100%;
  height: 100%;
  background-image: url(${(props)=> props.photo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;