export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(e => parseInt(e));

  return new Date(year, month - 1, day);
};
