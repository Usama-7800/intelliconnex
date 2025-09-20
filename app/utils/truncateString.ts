export const truncateString = (str: string, maxLength: number) => {
  // Check if the string length is already less than or equal to maxLength
  if (str.length <= maxLength) {
    return str;
  }

  // Find the last space before maxLength
  let lastSpaceIndex = str.lastIndexOf(" ", maxLength);

  // If there are no spaces before maxLength, cut the string at maxLength
  if (lastSpaceIndex === -1) {
    return str.slice(0, maxLength - 3) + "...";
  }

  // Otherwise, cut the string at the last space before maxLength
  return str.slice(0, lastSpaceIndex) + "...";
};
