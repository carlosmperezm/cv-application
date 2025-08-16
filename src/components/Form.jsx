import { useState } from 'react';

import {
  generalInfoFields,
  educationalExpFields,
  practicalExpFields
} from '../data.js';

import Section from './Section.jsx';
import Button from './Button.jsx';

const genInfoFields = [...generalInfoFields];
const eduExpFields = [...educationalExpFields];
const practExpFields = [...practicalExpFields];

export default function Form() {
  const [submitted, setSubmit] = useState(false);

  function disableField(field) {
    return { ...field, disabled: true };
  }
  function handleEdit() {
    setSubmit(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }
  function updateData(labelName, newValue) {
    function updateField(field, index) {
      if (field.name === labelName) {
        this[index].value = newValue;
      }
    }
    generalInfoFields.forEach(updateField, genInfoFields);
    educationalExpFields.forEach(updateField, eduExpFields);
    practicalExpFields.forEach(updateField, practExpFields);
  }

  if (submitted) {
    return (
      <>
        <Section
          title='General Info'
          fields={genInfoFields.map(disableField)}>
        </Section>
        <Section
          title='Educational Exp'
          fields={eduExpFields.map(disableField)}>
        </Section>
        <Section
          title='Practical Exp'
          fields={practExpFields.map(disableField)}>
        </Section>
        <Button text='Edit' onClick={handleEdit}></Button>
      </>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section
        title='General Info'
        fields={genInfoFields}
        onChange={updateData}
      >
      </Section>
      <Section
        title='Educational Exp'
        fields={eduExpFields}
        onChange={updateData}
      >
      </Section>
      <Section
        title='Practical Exp'
        fields={practExpFields}
        onChange={updateData}
      >
      </Section>
      <Button text='Submit CV' type='submit'></Button>
    </form>
  )
}
