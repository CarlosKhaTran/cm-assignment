import moment from "moment";

export const formatCountValue = (value, singleUnit, manyUnits) => {
  if (value < 1) {
    return `${Math.max(0, value)} ${singleUnit}`;
  }
  return `${value} ${manyUnits}`;
};

const KILO_JOULE_FACTOR = 4.184;

export const caloriesToKiloJoules = value => {
  return Math.round(value * KILO_JOULE_FACTOR);
};

export const kiloJoulesToCalories = value => {
  if (!value) {
    return 0;
  }
  return Math.round(value / KILO_JOULE_FACTOR);
};

export const formatDuration = minutes => {
  if (!minutes) {
    return "";
  }
  if (minutes < 60) {
    return `${minutes} min`;
  }
  return moment
    .utc(moment.duration(minutes, "minutes").asMilliseconds())
    .format("h [h]r mm [m]in");
};
