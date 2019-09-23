import {action, ActionType} from 'typesafe-actions';

export const setIsPositioningMarkerAction = (isPositioningMarker: boolean) =>
  action('SET_IS_POSITIONNING_MARKER', {isPositioningMarker});

const actions = {
  setIsPositioningMarkerAction,
};

export type MapActions = ActionType<typeof actions>;
