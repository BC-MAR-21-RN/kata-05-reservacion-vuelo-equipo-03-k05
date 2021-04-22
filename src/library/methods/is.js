export const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = password => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
  return re.test(password);
};

export const isObject = variable =>
  isDefined(variable) &&
  typeof variable === 'object' &&
  !Array.isArray(variable);

export const isString = variable =>
  isDefined(variable) && typeof variable === 'string';

  export const isDefined = variable =>
  typeof variable !== 'undefined' && variable !== null;
