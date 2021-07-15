import React from 'react';

type Props = {
  value: string;
  onChangeText: any;
  placeholder: string;
};

const TextInput = ({ value, onChangeText, placeholder }: Props) => (
  <input
    className="m-form-text"
    type="text"
    value={value}
    onChange={(e) => onChangeText(e.target.value)}
    placeholder={placeholder}
  />
);
export default TextInput;
