import '../styles/field.css';
import { useState } from "react";

export default function Field({ text = '', title, disabled, onChange, type = 'text' }) {
  const [value, setValue] = useState(text);

  function handleKeyPress(e) {
    setValue(e.target.value);
    onChange(title, e.target.value);
  }

  return (
    <label>
      <p>{title}: </p>
      {type === 'textarea'
        ?
        <textarea
          value={value}
          disabled={disabled}
          onChange={handleKeyPress}>
        </textarea>
        :
        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={handleKeyPress}
        />
      }
    </label>
  )
}
