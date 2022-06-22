export interface IState {
  request: boolean;
  imagesList: IImageCard[] | [];
  countCards: number;
}
export interface IAction {
  type: string;
  errorMessage?: string;
  imagesList?: IImageCard[];
}

export interface IImageCard {
  image: string;
  type: string;
  id: string;
}
