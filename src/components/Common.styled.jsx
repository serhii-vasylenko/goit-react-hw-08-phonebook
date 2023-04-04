import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  /* display: block; */
  /* padding: 24px; */
  &.active {
    color: #0dcaf0;
    /* background-color: #6cd591; */
  }
`;