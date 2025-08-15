import Field from './Field.jsx';


export default function Section({ title, fields }) {
  return (
    <section>
      <fieldset>{title}
        <div className='fields-container'>
          {fields.map(field =>
            <Field
              key={field.id}
              disabled={field.disabled}
              title={field.name}
              type={field.type}>
            </Field>
          )}
        </div>
      </fieldset>
    </section>
  )
}

