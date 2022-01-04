// decodeHtmlCharCodes used to decode string like '60&#039;s' to '60's', to compare correctAnswer and answer button

export const decodeHtmlCharCodes = (str) =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode),
  );

// decodeHtmlCharCodes used to convert special characters (like <) into their escaped/encoded values (like &lt;)
export const htmlEntities = (str) => {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/á/g, '&aacute;')
    .replace(/é/g, '&eacute;')
    .replace(/í/g, '&iacute;')
    .replace(/ó/g, '&oacute;')
    .replace(/ú/g, '&uacute;');
};

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
  return !!isValid;
};
