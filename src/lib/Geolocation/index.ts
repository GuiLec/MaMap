import RNGeolocationService, {
  GeoPosition,
} from 'react-native-geolocation-service';
import {Platform} from 'react-native';

interface Position {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}

const ENABLE_HIGH_ACCURACY = true;
const TIMEOUT = 15000;
const MAXIMUM_AGE = 10000;

export class Geolocation {
  // Singleton pattern
  private constructor() {
    // Do not use RNGeolocationService for permission checking.
    if (Platform.OS === 'ios') {
      RNGeolocationService.setRNConfiguration({
        skipPermissionRequests: true,
        authorizationLevel: 'whenInUse',
      });
    }
  }
  static get instance() {
    if (!Geolocation._instance) {
      Geolocation._instance = new Geolocation();
    }
    return Geolocation._instance;
  }
  private static _instance: Geolocation;

  // Public API

  /**
   * @abstract Warning: check that you have the permission to use the location of the user before using this method.
   */
  getCurrentPosition = (): Promise<GeoPosition> =>
    new Promise((resolve, reject) => {
      RNGeolocationService.getCurrentPosition(
        position => {
          resolve(position);
        },
        error => {
          reject(error.code);
        },
        {
          enableHighAccuracy: ENABLE_HIGH_ACCURACY,
          timeout: TIMEOUT,
          maximumAge: MAXIMUM_AGE,
          showLocationDialog: false,
        },
      );
    });
}
