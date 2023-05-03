import styled from 'styled-components';

export const StatList = styled.ul`
  padding-bottom: 6px;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
