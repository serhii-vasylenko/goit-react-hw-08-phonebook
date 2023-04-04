import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
font-weight: 500;
  &.active {
    color: #0dcaf0;
  }
`;
