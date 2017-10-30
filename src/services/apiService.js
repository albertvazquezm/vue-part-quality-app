import * as parts from '../../mock/parts.json';
import { Observable } from 'rxjs/Observable';

const PART_UPDATES_INTERVAL = 5 * 1000;
const MAX_RANDOM_DEV = 3;

export default class ApiService {
  static getParts() {
    return Observable.timer(0, PART_UPDATES_INTERVAL)
      .map(_ => getRandomizedPartValues(parts.parts));
  }
}

const getRandomizedPartValues = (parts) => {
  return parts.map(part => {
    part.features.map(feature => {
      feature.controls.map(control => {
        control.dev = getRandomDev();
        control.devOutTot = getRandomDev();
        return control;
      })
      return feature;
    })
    return part;
  });
}

const getRandomDev = () => {
  return Math.floor(Math.random() * (MAX_RANDOM_DEV + 1));
}
