import '../styles/button.css';

export default function Button({ text, type = 'button', onClick = null }) {
  return <button type={type} onClick={onClick}>{text}</button>
}
