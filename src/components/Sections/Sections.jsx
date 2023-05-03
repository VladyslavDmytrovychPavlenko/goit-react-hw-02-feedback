import React from 'react';
import PropTypes from 'prop-types';
import { SubTitle, Sec } from './Section.styled';
export function Sections({ children, title }) {
  return (
    <Sec>
      {title && <SubTitle>{title}</SubTitle>}
      {children}
    </Sec>
  );
}
Sections.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
