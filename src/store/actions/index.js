import {
  GET_LIST,
  SHOW_INFO_MODAL,
  HIDE_INFO_MODAL,
  EDIT_ITEM,
  ADD_ITEM,
  REMOVE_ITEM
} from '../constants/action-types';

export function getList(payload) {
  return {
    type: GET_LIST,
    payload
  };
}

export function showInfoModal(payload) {
  return {
    type: SHOW_INFO_MODAL,
    payload
  };
}

export function hideInfoModal() {
  return {
    type: HIDE_INFO_MODAL
  };
}

export function editItem(payload) {
  return {
    type: EDIT_ITEM,
    payload
  };
}

export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload
  };
}

export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload
  };
}
