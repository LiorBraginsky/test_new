import React from 'react';
import ListItem from './ListItem';
import './styles.css';

const List = props => {
  const {
    list: { results },
    toolTipPosition,
    toolTipColor,
    toolTipTextColor,
    isDesktop,
    onClickInfoModal
  } = props;
  return (
    <div className={`list ${isDesktop}`}>
      {results &&
        results.map(item => (
          <ListItem
            onClickInfoModal={onClickInfoModal}
            toolTipPosition={toolTipPosition}
            toolTipColor={toolTipColor}
            toolTipTextColor={toolTipTextColor}
            key={item.post_id}
            item={item}
          />
        ))}
    </div>
  );
};

export default List;
