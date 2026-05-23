export const getSpeedMultiplier = (speed: string) => {
  if (speed === "express") {
    return 1.5;
  }

  if (speed === "economy") {
    return 0.85;
  }

  return 1;
};

export const calculateTotal = (items: any[], speed: string) => {
  const subtotal = items.reduce((acc, item) => {
    return acc + item.pricePerUnit * item.count;
  }, 0);

  const multiplier = getSpeedMultiplier(speed);

  const total = subtotal * multiplier;

  return {
    subtotal,
    total,
  };
};
