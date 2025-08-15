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

  if (submitted) return <h1>Submitted</h1>

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
