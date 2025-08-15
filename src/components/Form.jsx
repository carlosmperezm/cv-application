import { useState } from 'react';

import {
  generalInfoFields,
  educationalExpFields,
  practicalExpFields
} from '../data.js';

import Section from './Section.jsx';
import Button from './Button.jsx';

export default function Form() {
  const [submitted, setSubmit] = useState(false);

  if (submitted) {
    const readOnlyGenInfoFields = generalInfoFields.map(
      (field) => {
        return { ...field, disabled: true };
      }
    )
    const readOnlyEduExpFields = educationalExpFields.map(
      (field) => {
        return { ...field, disabled: true };
      }
    )
    const readOnlyPractExpFields = practicalExpFields.map(
      (field) => {
        return { ...field, disabled: true };
      }
    )
    return (
      <>
        <Section
          title='General Info'
          fields={readOnlyGenInfoFields}>
        </Section>
        <Section
          title='Educational Exp'
          fields={readOnlyEduExpFields}>
        </Section>
        <Section
          title='Practical Exp'
          fields={readOnlyPractExpFields}>
        </Section>
        <Button text='Edit' onClick={handleEdit}></Button>
      </>
    )
  }

  function handleEdit() {
    setSubmit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section title='General Info' fields={generalInfoFields}></Section>
      <Section title='Educational Exp' fields={educationalExpFields}></Section>
      <Section title='Practical Exp' fields={practicalExpFields}></Section>
      <Button text='Submit CV' type='submit'></Button>
    </form>
  )
}
