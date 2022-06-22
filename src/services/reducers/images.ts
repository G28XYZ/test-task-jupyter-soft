import { IAction, IState } from "../../utils/types";
import { IMAGES_ACTIONS } from "../actions/images";

export const reduceImages = (state: IState, action: IAction) => {
  switch (action.type) {
    case IMAGES_ACTIONS.REQUEST:
      return { ...state, request: true };

    case IMAGES_ACTIONS.REQUEST_SUCCESS:
      return { ...state, request: false };

    case IMAGES_ACTIONS.REQUEST:
      return { ...state, request: false, message: action.errorMessage };

    case IMAGES_ACTIONS.SET_IMAGES_LIST:
      return {
        ...state,
        imagesList: action.imagesList,
        showedCards: action.imagesList.slice(0, state.countCards),
      };

    case IMAGES_ACTIONS.GET_MORE_CARDS:
      const countCards = state.countCards + 9;

      return {
        ...state,
        countCards,
        showedCards: state.imagesList.slice(0, countCards),
      };

    case IMAGES_ACTIONS.CHANGE_TYPE:
      if (action.cardType === "Show All") {
        return {
          ...state,
          currentType: action.cardType,
        };
      }
      return { ...state, currentType: action.cardType };

    default:
      return state;
  }
};
