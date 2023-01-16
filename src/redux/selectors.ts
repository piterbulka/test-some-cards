import { RootState } from './store';

// selector for replace useSelector on pages
export const selectCards = (state: RootState) => state.listCardsSlice;
