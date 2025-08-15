import './App.css'

import Section from './components/Section.jsx';
import Button from './components/Button.jsx';

function App() {

  const generalInfoFields = [
    { name: 'Name', type: 'text', id: crypto.randomUUID() },
    { name: 'Email', type: 'email', id: crypto.randomUUID() },
    { name: 'Phone number', type: 'tel', id: crypto.randomUUID() },
  ];
  const educationalExpFields = [
    { name: 'School name', type: 'text', id: crypto.randomUUID() },
    { name: 'Title of study', type: 'text', id: crypto.randomUUID() },
    { name: 'Date of study', type: 'date', id: crypto.randomUUID() },
  ];
  const practicalExpFields = [
    { name: 'Company name', type: 'text', id: crypto.randomUUID() },
    { name: 'Position title', type: 'text', id: crypto.randomUUID() },
    { name: 'Main responsabilities', type: 'text', id: crypto.randomUUID() },
    { name: 'Start date', type: 'date', id: crypto.randomUUID() },
    { name: 'End date', type: 'date', id: crypto.randomUUID() }
  ];

  function submitHandle() {
    console.log('Submitted');
    return (
      <h1>Submitted</h1>
    )
  }


  return (
    <>
      <Section title='General Info' fields={generalInfoFields}></Section>
      <Section title='Educational Exp' fields={educationalExpFields}></Section>
      <Section title='Practical Exp' fields={practicalExpFields}></Section>
      <Button text='Submit CV' onclickHandle={submitHandle}></Button>
    </>
  )
}

export default App
