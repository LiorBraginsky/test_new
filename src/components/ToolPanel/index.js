import React from 'react';
import './styles.css';
import MyButton from '../MyButton/MyButton';

const ToolPanel = props => {
  const { isDesktop, addItem } = props;

  function getPosition(position) {
    props.toolTipPosition(position);
  }

  function getColor(color) {
    props.toolTipColor(color);
  }

  function getTextColor(color) {
    props.toolTipTextColor(color);
  }

  function openCreatingItem() {
    addItem();
  }

  return (
    <div className={`container ${isDesktop}`}>
      <div>
        <p>Color ToolTips</p>
        <i>type color (hex, word)</i>
        <input type="text" name="color" onChange={e => getColor(e.target.value)} />
      </div>
      <div>
        <p>Text Color ToolTips</p>
        <i>type color (hex, word)</i>
        <input type="text" name="color" onChange={e => getTextColor(e.target.value)} />
      </div>
      <div>
        <p>Position ToolTips</p>
        <div>
          <label>
            <input name="position" onChange={() => getPosition('top')} type="radio" value="top" />
            Top
          </label>
          <label>
            <input
              name="position"
              onChange={() => getPosition('bottom')}
              type="radio"
              value="bottom"
            />
            Bottom
          </label>
        </div>
      </div>
      <MyButton onClick={openCreatingItem} styles="my-button">
        Add new Item
      </MyButton>
    </div>
  );
};

export default ToolPanel;
