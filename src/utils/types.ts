export interface IState {
  request: boolean;
  imagesList: IImageCard[] | [];
  showedCards: IImageCard[] | [];
  countCards: number;
  currentType: string;
}
export interface IAction {
  type: string;
  errorMessage?: string;
  imagesList?: IImageCard[];
  cardType?: string;
}

export interface IImageCard {
  image: string;
  type: string;
  id: string;
}
