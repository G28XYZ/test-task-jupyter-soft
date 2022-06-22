export interface IState {
  request: boolean;
  imagesList: IImageCard[] | [];
  showedCards: IImageCard[] | [];
  countCards: number;
  currentType: string;
  activeCard: null | IImageCard;
}
export interface IAction {
  type: string;
  errorMessage?: string;
  imagesList?: IImageCard[];
  cardType?: string;
  card?: IImageCard;
  id?: string;
}

export interface IImageCard {
  image: string;
  type: string;
  name: string;
  id: string;
}
