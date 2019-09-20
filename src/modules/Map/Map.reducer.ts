import {createReducer} from 'typesafe-actions';
import {MapActions} from './Map.actions';

export interface MapState {
  selectedMarkerObject: {
    objectId: string;
    objectType: MarkerObjectType;
    address: string;
  };
}

const initialState = {
  selectedMarkerObject: {
    objectId: '',
    objectType: '',
    address: '',
  },
} as const;

export const mapReducer = createReducer<MapState, MapActions>(initialState, {
  SELECT_MARKER_OBJECT: (state, action) => {
    return {
      ...state,
      selectedMarkerObject: {
        ...state.selectedMarkerObject,
        ...action.payload,
      },
    };
  },
  DESELECT_MARKER_OBJECT: state => {
    return {
      ...state,
      selectedMarkerObject: {
        objectId: '',
        objectType: '',
        address: '',
      },
    };
  },
  SAVE_SELECTED_MARKER_OBJECT_ADDRESS: (state, action) => {
    return {
      ...state,
      selectedMarkerObject: {
        objectId: state.selectedMarkerObject.objectId,
        objectType: state.selectedMarkerObject.objectType,
        address: action.payload.address,
      },
    };
  },
});
