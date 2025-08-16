import Field from './Field.jsx';


export default function Section({ title, fields, onChange }) {
  return (
    <section>
      <fieldset>{title}
        <div className='fields-container'>
          {fields.map(field =>
            <Field
              key={field.id}
              disabled={field.disabled}
              title={field.name}
              type={field.type}
              text={field.value}
              onChange={onChange}
            >
            </Field>
          )}
        </div>
      </fieldset>
    </section>
  )
}

