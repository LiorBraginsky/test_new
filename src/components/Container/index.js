import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ToolPanel from '../ToolPanel';
import List from '../List';
import './styles.css';
import {
  getList,
  showInfoModal,
  hideInfoModal,
  editItem,
  addItem,
  removeItem
} from '../../store/actions';
import InfoModal from '../InfoModal';

const Container = props => {
  const {
    getList,
    list,
    showInfoModal,
    modalInfo,
    hideInfoModal,
    editItem,
    addItem,
    removeItem
  } = props;

  const widthFromDocument = document.body.clientWidth;
  const [windowWidth, setWidth] = useState(widthFromDocument);
  const [positionForToolTip, setPositionForToolTip] = useState('top');
  const [colorForToolTip, setColorForToolTip] = useState(null);
  const [textColorForToolTip, setTextColorForToolTip] = useState(null);

  function getWidthFromDocument() {
    window.addEventListener('resize', () => {
      setWidth(document.body.clientWidth);
    });
  }

  function checkIsDesktop() {
    const ruleForResponsive = windowWidth > 767 ? 'desktop' : 'mobile';
    return ruleForResponsive;
  }

  useEffect(() => {
    getList();
    getWidthFromDocument();
  });

  function setPosition(position) {
    setPositionForToolTip(position);
  }

  function setColor(color) {
    setColorForToolTip(color);
  }

  function setTextColor(color) {
    setTextColorForToolTip(color);
  }

  const isDesktop = checkIsDesktop();
  return (
    <div className={`Container ${isDesktop}`}>
      <ToolPanel
        isDesktop={isDesktop}
        toolTipPosition={setPosition}
        toolTipColor={setColor}
        toolTipTextColor={setTextColor}
        addItem={showInfoModal}
      />
      <List
        list={list}
        isDesktop={isDesktop}
        toolTipPosition={positionForToolTip}
        toolTipColor={colorForToolTip}
        toolTipTextColor={textColorForToolTip}
        onClickInfoModal={showInfoModal}
      />
      <InfoModal
        info={modalInfo}
        onCloseModal={hideInfoModal}
        onEditModal={editItem}
        addItem={addItem}
        removeItem={removeItem}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    list: state.currentList || [],
    modalInfo: state.modalInfo
  };
};

const mapDispatchToProps = {
  getList,
  showInfoModal,
  hideInfoModal,
  editItem,
  addItem,
  removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
