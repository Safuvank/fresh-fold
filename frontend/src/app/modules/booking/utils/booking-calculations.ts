export const getSpeedMultiplier = (speed: string) => {
  if (speed === "express") {
    return 1.5;
  }

  if (speed === "economy") {
    return 0.85;
  }

  return 1;
};
