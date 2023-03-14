export const urlValidator = (url: string) => {
  if (url.includes("undefined") || url.includes("null")) return false;
  return true;
};
