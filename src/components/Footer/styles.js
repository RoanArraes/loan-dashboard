import styled from 'styled-components';

import {COLORS} from '../../utils/colors';

export const FooterArea = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${COLORS.basic4};
  justify-content: center;
`;

export const FooterText = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: ${COLORS.basic0};
`;