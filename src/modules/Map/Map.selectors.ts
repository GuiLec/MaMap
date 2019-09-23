import {RootReducer} from '../rootReducer';

export const isPositionMarkerSelector = (state: RootReducer): boolean =>
  state.map.isPositioningMarker;
