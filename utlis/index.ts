import { RateData } from "types";

export function getRedisKey(uid: string): string {
  return '$$$_' + uid
}

export function createNewRating(): RateData {
  return {
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0
  }
}

export function getHour(time:number){
  const millisecondsInAnHour = 60 * 60 * 1000; // 3600000
  const hours = Math.floor(time / millisecondsInAnHour);
  return hours;
}
