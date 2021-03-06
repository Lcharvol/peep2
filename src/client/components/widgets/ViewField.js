import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colors } from '@blueprintjs/core';

const StyledBlock = styled.div`
  padding-left: 0.8em;
  padding-right: 0.8em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background-color: ${Colors.DARK_GRAY3};
  border-radius: 3px;
  margin-top: 15px;
  height: 35px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
`;

const StyledBlockContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${Colors.LIGHT_GRAY5} !important;
`;

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewField = ({ label, value, className }) => (
  <StyledFormField className={className}>
    <label>{label}</label>
    <StyledBlock>
      {value && (
        <StyledBlockContent>
          <span>{value}</span>
        </StyledBlockContent>
      )}
    </StyledBlock>
  </StyledFormField>
);

ViewField.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default ViewField;
