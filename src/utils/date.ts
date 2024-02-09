export const convertDate = (source: Date) => {
  let dateObj = new Date(source);
  return dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
};