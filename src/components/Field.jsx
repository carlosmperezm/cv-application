import { useState } from "react";

export default function Field({ title, disabled, type = 'text' }) {
  const [value, setValue] = useState('');


  function handleKeyPress(e) {
    setValue(e.target.value);
  }

  return (
    <label>
      {title}:
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
