import * as React from 'react';

interface IButton {
  text: string;
}

const Button = ({ text }: IButton): any => (
  <button type="button">{text}</button>
);

export default Button;
