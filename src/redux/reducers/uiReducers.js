import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  PROGRESS_BAR,
  CLEAR_PROGRESS_BAR,
} from "../types";

const initialState = {
  loading: false,
  errors: null,
  uploadPercentage: 0,
  uploading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
    case PROGRESS_BAR:
      return {
        ...state,
        uploadPercentage: action.payload,
        uploading: true,
      };
    case CLEAR_PROGRESS_BAR:
      return {
        ...state,
        uploadPercentage: 0,
        uploading: false,
      };
    default:
      return state;
  }
}
