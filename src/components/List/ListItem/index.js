import React, { useState } from 'react';
import ToolTips from '../../ToolTips/index';

const ListItem = props => {
  const { images, post_title: postTitle } = props.item;
  const { toolTipPosition, onClickInfoModal, item, toolTipColor, toolTipTextColor } = props;
  const [show, showToolTip] = useState(false);

  function hundleMouseEnter() {
    showToolTip(true);
  }

  function hundleMouseLeave() {
    showToolTip(false);
  }

  return (
    <div
      className="list-item"
      onMouseEnter={() => hundleMouseEnter()}
      onMouseLeave={() => hundleMouseLeave()}
      onClick={() => onClickInfoModal(item)}
    >
      <img className="item-image" src={images} alt="img" />
      <ToolTips
        show={show}
        text={postTitle}
        toolTipPosition={toolTipPosition}
        toolTipColor={toolTipColor}
        toolTipTextColor={toolTipTextColor}
      />
    </div>
  );
};

export default ListItem;
