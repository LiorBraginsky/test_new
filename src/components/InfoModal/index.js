import React, { useState } from 'react';
import styled from 'styled-components';
import MyButton from '../MyButton/MyButton';

const ModalContainer = styled.div`
  color: black;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const InfoContainer = styled.div`
  background: #fff;
  padding: 10px;
  width: 50%;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 70%;
  border: 1px solid grey;
  max-width: 200px;
`;

const InfoModal = (props) => {
  const {
    info,
    onCloseModal,
    onEditModal,
    addItem,
    removeItem
  } = props;
  const [isEditable, setEditable] = useState(false);
  const [itemInfo, setValues] = useState();

  function checkAddingProps(info) {
    if (info.creating && !isEditable) {
      setValues({
        images: '',
        post_title: '',
        description: ''
      });
      setEditable(true);
    }
  }

  checkAddingProps(info);

  function hundlerEditClick() {
    if (!isEditable) {
      setValues(info);
      setEditable(true);
    } else {
      onEditModal(itemInfo);
      setEditable(false);
    }
  }

  function removeItemFromList() {
    removeItem(info)
  }

  function addItemToList() {
    if (itemInfo.images !== '' || itemInfo.post_title !== '' || itemInfo.description !== '') {
      addItem(itemInfo);
      setEditable(false);
    } else {
      window.alert('Please type all inputs')
    }
  }

  function hundlerCloseModal() {
    setEditable(false);
    onCloseModal();
  }

  function hundleInput(e) {
    setValues({
      ...itemInfo,
      [e.target.name]: e.target.value
    });
  }


  return (
    <ModalContainer show={info.isShow}>
      <InfoContainer>
        {!isEditable ? (
          <>
            <Image src={info.images} alt="img" />
            <p>Name: {info.post_title}</p>
            <p>Description: {info.description}</p>
            <MyButton styles="my-button delete" onClick={() => removeItemFromList()}>
              Remove Item
            </MyButton>
            <MyButton onClick={() => hundlerEditClick()} styles="my-button edit">
              Edit Item
            </MyButton>
            <MyButton onClick={() => hundlerCloseModal()} styles="my-button close">
              Close Modal
            </MyButton>
          </>
        ) : (
          <>
            <p>Image link('http://...') :</p>
            <input
              type="text"
              name="images"
              value={itemInfo.images}
              onChange={hundleInput}
            />
            <p>Name:</p>
            <input
              type="text"
              name="post_title"
              value={itemInfo.post_title}
              onChange={hundleInput}
            />
            <p>Description:</p>
            <input
              type="text"
              name="description"
              value={itemInfo.description}
              onChange={hundleInput}
            />
            {info.creating ? (
              <MyButton onClick={() => addItemToList()} styles="my-button save">
                Create
              </MyButton>
            ) : (
              <MyButton onClick={() => hundlerEditClick()} styles="my-button save">
                Save
              </MyButton>
            )}
            <MyButton onClick={() => hundlerCloseModal()} styles="my-button close">
              Close Editing
            </MyButton>
          </>
        )}
      </InfoContainer>
    </ModalContainer>
  );
};

export default InfoModal;
