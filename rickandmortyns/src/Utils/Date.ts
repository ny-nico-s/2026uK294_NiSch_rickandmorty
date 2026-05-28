export const toDateInput = (value: string): string => {
  if (!value) {
    return "";
  }
  return value.slice(0, 10);
};

export const toIso = (dateInput: string): string => {
  return new Date(dateInput).toISOString();
};
