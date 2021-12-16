// decodeHtmlCharCodes used to decode string like '60&#039;s' to '60's', to compare value in sessionStorage and answer button

export const decodeHtmlCharCodes = (str) =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode),
  );

export const saveDataToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value);
};
