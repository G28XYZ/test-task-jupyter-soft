import { Dispatch } from "react";
import api from "../../utils/api";
import { address, namesCard, namesTypeCard } from "../../utils/constants";
import { IAction } from "../../utils/types";

const shortid = require("shortid");

export const IMAGES_ACTIONS = {
  REQUEST: "REQUEST",
  REQUEST_SUCCESS: "REQUEST_SUCCESS",
  REQUEST_FAILED: "REQUEST_FAILED",
  SET_IMAGES_LIST: "SET_IMAGES_LIST",
  GET_MORE_CARDS: "GET_MORE_CARDS",
  CHANGE_TYPE: "CHANGE_TYPE",
  SET_ACTIVE_CARD: "SET_ACTIVE_CARD",
  DELETE_CARD: "DELETE_CARD",
};

export const fetchImages = (dispatch: Dispatch<IAction>) => {
  dispatch({ type: IMAGES_ACTIONS.REQUEST });
  api
    .getImages()
    .then((data) => {
      const imagesList = data.map(
        (item: { image: { url: string } }, index: number) => ({
          image: `${address}${item.image.url}`,
          id: shortid.generate(),
          type: namesTypeCard[Math.floor(Math.random() * namesTypeCard.length)],
          name: namesCard[index] || "",
        })
      );
      dispatch({ type: IMAGES_ACTIONS.SET_IMAGES_LIST, imagesList });
      dispatch({ type: IMAGES_ACTIONS.REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: IMAGES_ACTIONS.REQUEST_FAILED, errorMessage: err });
      console.log(err);
    });
};
