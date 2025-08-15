import './App.css'

import Section from './components/Section.jsx';

function App() {

  const generalInfoFields = [
    { name: 'Name', type: 'text' },
    { name: 'Email', type: 'email' },
    { name: 'Phone number', type: 'tel' },
  ];
  const educationalExpFields = [
    { name: 'School name', type: 'text' },
    { name: 'Title of study', type: 'text' },
    { name: 'Date of study', type: 'date' },
  ];
  const practicalExpFields = [
    { name: 'Company name', type: 'text' },
    { name: 'Position title', type: 'text' },
    { name: 'Main responsabilities', type: 'text' },
    { name: 'Start date', type: 'date' },
    { name: 'End date', type: 'date' }
  ];


  return (
    <>
      <Section title='General Info' fields={generalInfoFields}></Section>
      <Section title='Educational Exp' fields={educationalExpFields}></Section>
      <Section title='Practical Exp' fields={practicalExpFields}></Section>
    </>
  )
}

export default App
