const concat = (str1: string, str2: string) => {
  return str1 + str2;
};

const capitalize = (str: string) => {
  const newStr = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
  return newStr;
};

const upperCase = (str: string) => {
  return str.toUpperCase();
};

const lowerCase = (str: string) => {
  return str.toLowerCase();
};

export const strings = {
  concat,
  capitalize,
  upperCase,
  lowerCase
};
