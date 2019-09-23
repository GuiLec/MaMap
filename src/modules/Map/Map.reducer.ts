import {createReducer} from 'typesafe-actions';
import {MapActions} from './Map.actions';

export interface MapState {
  isPositioningMarker: boolean;
}

const initialState: MapState = {
  isPositioningMarker: false,
};

export const mapReducer = createReducer<MapState, MapActions>(initialState, {
  SET_IS_POSITIONNING_MARKER: (state, action) => {
    return {
      ...state,
      isPositioningMarker: action.payload.isPositioningMarker,
    };
  },
});
