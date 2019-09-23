import {combineReducers} from 'redux';
import {mapReducer, MapState} from './Map/Map.reducer';

export interface RootReducer {
  map: MapState;
}

export const rootReducer = combineReducers<RootReducer>({
  map: mapReducer,
});
