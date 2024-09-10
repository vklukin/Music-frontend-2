type prettyDurationTimeReturn = {
  minutes: number;
  seconds: number;
};

const MINUTE = 60;

export function durationTimeObject(duration: number): prettyDurationTimeReturn {
  const ceiledDuration = Math.ceil(duration);

  const minutes = Math.floor(ceiledDuration / MINUTE);
  const seconds = Math.ceil(ceiledDuration % MINUTE);

  return {
    minutes,
    seconds
  };
}
