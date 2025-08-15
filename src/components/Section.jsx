import Field from './Field.jsx';


export default function Section({ title, fields }) {
  return (
    <section>
      <h2>{title}</h2>
      <div class='fields-container'>
        {fields.map(field =>
          <Field title={field.name} type={field.type}></Field>
        )}
      </div>

    </section>
  )
}

