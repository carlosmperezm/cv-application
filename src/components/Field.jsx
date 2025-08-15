import { useState } from "react";

export default function Field({ title, type = 'text' }) {
  const [value, setValue] = useState('');

  function handleKeyPress(e) {
    setValue(e.target.value);
  }

  return (
    <label>
      {title}:
      <input type={type} value={value} onChange={handleKeyPress} />
    </label>
  )
}
