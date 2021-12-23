// decodeHtmlCharCodes used to decode string like '60&#039;s' to '60's', to compare value in sessionStorage and answer button

export const decodeHtmlCharCodes = (str) =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode),
  );

export const saveDataToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};


export const validateUserName = (user) => {
  if (user.length < 3) {
    return false;
  }
  const usernameRegex = /^[a-zA-Z]+$/;
  const isValid = user.match(usernameRegex);
  return !!isValid ;
};
 