import uuid from 'uuid';
import {
  GET_LIST,
  SHOW_INFO_MODAL,
  HIDE_INFO_MODAL,
  EDIT_ITEM,
  ADD_ITEM,
  REMOVE_ITEM
} from '../constants/action-types';
import productList from '../../assets/product_list.json';

const initialState = {
  currentList: [],
  modalInfo: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST: {
      if (state.currentList.length === 0) {
        const newProductList = productList;
        return {
          ...state,
          currentList: newProductList
        };
      }
      return {
        ...state
      };
    }

    case SHOW_INFO_MODAL: {
      const { payload } = action;
      if (payload !== undefined) {
        return {
          ...state,
          modalInfo: {
            ...payload,
            isShow: true
          }
        };
      }
      return {
        ...state,
        modalInfo: {
          isShow: true,
          creating: true
        }
      };
    }

    case HIDE_INFO_MODAL: {
      return {
        ...state,
        modalInfo: {
          isShow: false
        }
      };
    }

    case EDIT_ITEM: {
      const { payload } = action;
      const { currentList } = state;
      const newCurrentList = currentList.results.map(item => {
        if (item.post_id === payload.post_id) {
          const editedPost = payload;
          return editedPost;
        }
        return item;
      });
      return {
        ...state,
        currentList: {
          results: newCurrentList
        },
        modalInfo: {
          ...payload,
          isShow: true
        }
      };
    }

    case ADD_ITEM: {
      const { payload } = action;
      const { currentList } = state;
      currentList.results.push({
        ...payload,
        post_id: uuid()
      });
      return {
        ...state,
        modalInfo: {
          isShow: false
        }
      };
    }

    case REMOVE_ITEM: {
      const { payload } = action;
      const { currentList } = state;
      const idToRemove = payload.post_id;
      const newCurrentList = currentList.results.filter(item => item.post_id !== idToRemove);
      return {
        ...state,
        currentList: {
          results: newCurrentList
        },
        modalInfo: {
          isShow: false
        }
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
