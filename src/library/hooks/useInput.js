import {useState} from 'react';
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChangeText: setValue,
    },
    () => setValue(initialValue),
  ];
};
export const useCheckBox = () => {
  const [value, setValue] = useState(false);
  return [
    {
      value,
      onValueChange: setValue,
    },
  ];
};
