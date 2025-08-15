

export default function Field({ title, type = 'text' }) {
  return (
    <label>
      {title}:
      <input type={type} />
    </label>
  )
}
