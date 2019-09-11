import React from 'react';
import styled from 'styled-components';

const ToolTipBody = styled.div`
  color: ${props => (props.toolTipTextColor !== null ? props.toolTipTextColor : 'white')};
  border: 2px solid black;
  border-radius: 4px
  background: ${props => (props.toolTipColor !== null ? props.toolTipColor : '#6897bd')};
  position: absolute;
  top: ${props => (props.toolTipPosition === 'top' ? '-50px' : 'none')};
  bottom: ${props => (props.toolTipPosition === 'bottom' ? '-50px' : 'none')};
  z-index: 999;
  padding: 0 10px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const ToolTips = props => {
  const { text, show, toolTipPosition, toolTipColor, toolTipTextColor } = props;
  return (
    <ToolTipBody
      show={show}
      toolTipPosition={toolTipPosition}
      toolTipColor={toolTipColor}
      toolTipTextColor={toolTipTextColor}
    >
      <p>{text}</p>
    </ToolTipBody>
  );
};

export default ToolTips;
