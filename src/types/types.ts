export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface CardInterface {
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  _id: number;
  name: string;
  imageUrl: string;
  url: string;
  liked: boolean;
}

export interface ResponceListCardsInterface {
  items: CardInterface[];
  status: Status;
}
